package cn.learn.springboot09rocketmq.assemble;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicLong;
import javax.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.ConsumeOrderlyContext;
import org.apache.rocketmq.client.consumer.listener.ConsumeOrderlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.client.consumer.listener.MessageListenerOrderly;
import org.apache.rocketmq.client.exception.MQClientException;
import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.TransactionMQProducer;
import org.apache.rocketmq.common.consumer.ConsumeFromWhere;
import org.apache.rocketmq.common.message.MessageExt;
import org.apache.rocketmq.common.protocol.heartbeat.MessageModel;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 编写producer和consumer初始化类.
 *
 * @author 邵益炯
 * @date 2018/8/24
 */
@Slf4j
@Configuration
@EnableConfigurationProperties(RocketmqProperties.class)
@ConditionalOnProperty(prefix = RocketmqProperties.PREFIX, value = "namesrvAddr")
public class RocketmqAutoConfiguration {

  @Resource
  private RocketmqProperties properties;
  @Resource
  private ApplicationEventPublisher publisher;


  /**
   * 初始化向rocketmq发送普通消息的生产者.
   */
  @Bean
  @ConditionalOnProperty(prefix = RocketmqProperties.PREFIX, value = "producerInstanceName")
  public DefaultMQProducer defaultProducer() throws MQClientException {

    //一个应用创建一个Producer，由应用来维护此对象，可以设置为全局对象或者单例
    //注意：ProducerGroupName需要由应用来保证唯一
    //ProducerGroup这个概念发送普通的消息时，作用不大，但是发送分布式事务消息时，比较关键，
    //因为服务器会回查这个Group下的任意一个Producer

    DefaultMQProducer producer = new DefaultMQProducer(properties.getProducerGroupName());
    producer.setNamesrvAddr(properties.getNamesrvAddr());
    producer.setInstanceName(properties.getProducerInstanceName());
    producer.setVipChannelEnabled(false);
    producer.setRetryTimesWhenSendAsyncFailed(10);

    //Producer对象在使用之前必须要调用start初始化，初始化一次即可
    //注意：切记不可以在每次发送消息时，都调用start方法

    producer.start();
    log.info("RocketMq defaultProducer Started.");
    return producer;
  }

  /**
   * 初始化向rocketmq发送事务消息的生产者.
   */
  @Bean
  @ConditionalOnProperty(prefix = RocketmqProperties.PREFIX, value = "producerTranInstanceName")
  public TransactionMQProducer transactionProducer() throws MQClientException {

    //一个应用创建一个Producer，由应用来维护此对象，可以设置为全局对象或者单例
    //注意：ProducerGroupName需要由应用来保证唯一
    //ProducerGroup这个概念发送普通的消息时，作用不大，但是发送分布式事务消息时，比较关键，
    //因为服务器会回查这个Group下的任意一个Producer

    TransactionMQProducer producer = new TransactionMQProducer(
        properties.getTransactionProducerGroupName());
    producer.setNamesrvAddr(properties.getNamesrvAddr());
    producer.setInstanceName(properties.getProducerTranInstanceName());

    //Producer对象在使用之前必须要调用start初始化，初始化一次即可
    //注意：切记不可以在每次发送消息时，都调用start方法

    producer.start();

    log.info("RocketMq TransactionMQProducer Started.");
    return producer;
  }

  /**
   * 初始化rocketmq消息监听方式的消费者.
   */
  @Bean
  @ConditionalOnProperty(prefix = RocketmqProperties.PREFIX, value = "consumerInstanceName")
  public DefaultMQPushConsumer pushConsumer() throws MQClientException {
    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer(properties.getConsumerGroupName());
    consumer.setNamesrvAddr(properties.getNamesrvAddr());
    consumer.setVipChannelEnabled(properties.isVipChannelEnabled());
    consumer.setInstanceName(properties.getConsumerInstanceName());
    //是否广播获取
    if (properties.isConsumerBroadcasting()) {
      consumer.setMessageModel(MessageModel.BROADCASTING);
    }
    // 设置批量消费，以提升消费吞吐量，默认是1
    consumer.setConsumeMessageBatchMaxSize(
        properties.getConsumerBatchMaxSize() == 0 ? 1 : properties.getConsumerBatchMaxSize());
    //Consumer启动后，默认从什么位置开始消费
    consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
    //订阅指定topic下tags(整个平台的)
    List<String> subscribeList = properties.getSubscribe();
    for (String subscribe : subscribeList) {
      consumer.subscribe(subscribe.split(":")[0], subscribe.split(":")[1]);
    }

    //是否顺序消费
    if (properties.isEnableOrderConsumer()) {
      consumer.registerMessageListener(new MessageListenerOrderly() {
        AtomicLong consumeTimes = new AtomicLong(0);

        @Override
        public ConsumeOrderlyStatus consumeMessage(List<MessageExt> msgs,
            ConsumeOrderlyContext context) {
          context.setAutoCommit(false);
          log.info(Thread.currentThread().getName() + " Receive New Messages: " + msgs);
          //放入event中去
          publisher.publishEvent(new RocketmqEvent(msgs, consumer));
          this.consumeTimes.incrementAndGet();
          return ConsumeOrderlyStatus.SUCCESS;
        }
      });
    } else {
      consumer.registerMessageListener((MessageListenerConcurrently) (msgs, context) -> {
        log.info(Thread.currentThread().getName() + " Receive New Messages: " + msgs);
        //放入event中去
        publisher.publishEvent(new RocketmqEvent(msgs, consumer));
        //返回消费状态 CONSUME_SUCCESS 消费成功 RECONSUME_LATER 消费失败，需要稍后重新消费
        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
      });
    }

    Runnable r = () -> {
      try {
        // 延迟5秒再启动，主要是等待spring事件监听相关程序初始化完成，否则，回出现对RocketMQ的消息进行消费后立即发布消息到达的事件，
        // 然而此事件的监听程序还未初始化，从而造成消息的丢失
        Thread.sleep(5000);
        //Consumer对象在使用之前必须要调用start初始化，初始化一次即可
        consumer.start();
      } catch (Exception e) {
        log.info("RocketMq pushConsumer Start failure!!!.");
        log.error(e.getMessage(), e);
      }
      log.info("RocketMq pushConsumer Started.");
    };
    ExecutorService pool = Executors.newSingleThreadExecutor();
    pool.execute(r);

    return consumer;
  }
}