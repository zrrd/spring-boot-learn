package cn.learn.springboot.quick;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeOrderlyContext;
import org.apache.rocketmq.client.consumer.listener.ConsumeOrderlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerOrderly;
import org.apache.rocketmq.common.consumer.ConsumeFromWhere;
import org.apache.rocketmq.common.message.MessageExt;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 消费者.
 *
 * @author shaoyijiong
 * @date 2018/7/30
 */
@Component
@ConfigurationProperties(prefix = "rocketmq")
public class Consumer {

  /**
   * namesrvAddr 地址,通过配置文件.
   */
  private String namesrvAddr;

  public void receiveMessage() throws Exception {

    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("consumer1");
    consumer.setNamesrvAddr(namesrvAddr);
    consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
    //改变consumer是广播还是点对点
    //consumer.setMessageModel(MessageModel.BROADCASTING);
    consumer.subscribe("orderly", "*");

    //顺序接收
    consumer.registerMessageListener(new MessageListenerOrderly() {
      AtomicLong consumeTimes = new AtomicLong(0);

      @Override
      public ConsumeOrderlyStatus consumeMessage(List<MessageExt> msgs,
          ConsumeOrderlyContext context) {
        context.setAutoCommit(false);
        System.out.println(Thread.currentThread().getName() + " Receive New Messages: " + msgs);
        this.consumeTimes.incrementAndGet();
        return ConsumeOrderlyStatus.SUCCESS;
      }


    });
    consumer.start();
    System.out.println("Consumer Started.");
  }
}
