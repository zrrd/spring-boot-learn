package cn.learn.springboot.simple;

import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.client.exception.MQClientException;

/**
 * 消费者
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
public class Consumer {

  public static void main(String[] args) throws MQClientException {

    // Instantiate with specified consumer group name.
    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("SimpleConsumer");

    // Specify name server addresses.
    consumer.setNamesrvAddr("47.99.73.15:9876");

    // Subscribe one more more topics to consume.
    consumer.subscribe("TopicTest", "*");
    // Register callback to execute on arrival of messages fetched from brokers.
    consumer.registerMessageListener((MessageListenerConcurrently) (msgs, context) -> {
      System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);
      //模拟消息消费失败的场景 失败后rocketmq会稍后再试 默认16次后会放到死信队列
      //默认重试间隔 1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h
      if (msgs != null) {
        //重试次数
        System.out.println(msgs.get(0).getReconsumeTimes());
        System.out.println(new String(msgs.get(0).getBody()));
        throw new RuntimeException();
      }
      return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
    });

    //Launch the consumer instance.
    consumer.start();

    System.out.printf("Consumer Started.%n");
  }
}
