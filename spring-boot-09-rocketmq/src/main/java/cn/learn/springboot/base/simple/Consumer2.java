package cn.learn.springboot.base.simple;

import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.client.exception.MQClientException;
import org.apache.rocketmq.common.consumer.ConsumeFromWhere;

/**
 * 消费者
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
@SuppressWarnings("ALL")
public class Consumer2 {

  public static void main(String[] args) throws MQClientException {

    // Instantiate with specified consumer group name.
    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("SimpleConsumer");

    // Specify name server addresses.
    consumer.setNamesrvAddr("47.99.73.15:9876");
    //从最后一次消费地址开始
    consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_LAST_OFFSET);
    //消费开始的时间ConsumeFromWhere.CONSUME_FROM_TIMESTAMP时生效
    //consumer.setConsumeTimestamp("201901010000");
    // Subscribe one more more topics to consume.
    consumer.subscribe("TopicTest", "*");
    // Register callback to execute on arrival of messages fetched from brokers.
    consumer.registerMessageListener((MessageListenerConcurrently) (msgs, context) -> {
      System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);
      return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
    });

    //Launch the consumer instance.
    consumer.start();

    System.out.printf("Consumer Started.%n");
  }
}
