package cn.learn.springboot09rocketmq.assemble;

import javax.annotation.Resource;
import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.client.exception.MQClientException;
import org.apache.rocketmq.common.consumer.ConsumeFromWhere;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 消费者例子.
 *
 * @author 邵益炯
 * @date 2018/8/24
 */
@Component
public class ConsumerDemo {

  @Resource
  DefaultMQPushConsumer defaultMQPushConsumer;

  /**
   * 通过事件监听的方式拿到消息. condition 监听的topic 和tags
   *
   * @param event 监听的消息
   */
  @EventListener(condition = "#event.msgs[0].topic=='TopicTest1' and #event.msgs[0].tags=='TagA'")
  public void rocketmqMsgListen(RocketmqEvent event) {
    DefaultMQPushConsumer consumer = event.getConsumer();
    try {
      System.out.println("监听到一个消息达到：" + event.getMsgs().get(0).getMsgId());
      // TODO 进行业务处理
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public static void consumer() throws MQClientException {
    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("consumer2");
    consumer.setNamesrvAddr("192.168.6.45:9876");
    consumer.setVipChannelEnabled(false);
    consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
    consumer.subscribe("TopicTest1", "*");
    consumer.registerMessageListener((MessageListenerConcurrently) (msgs, context) -> {
      System.out.println(Thread.currentThread().getName() + " Receive New Messages: " + msgs);
      return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
    });
    consumer.start();
    System.out.println("Consumer Started.");
  }
}
