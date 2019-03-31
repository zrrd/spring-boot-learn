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
public class Consumer {

  public static void main(String[] args) throws MQClientException {

    // Instantiate with specified consumer group name.
    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("SimpleConsumer");

    // Specify name server addresses.
    consumer.setNamesrvAddr("47.99.73.15:9876");

    //这个配置只对新的consumer group 有效 重启后不管如何都是上一次的消费偏移开始消费
    //从最后一次消费地址开始  配置(一个新的订阅组第一次启动从队列的最后位置开始消费
    // ,一个新的订阅组第一次启动从队列的最前位置开始消费, 一个新的订阅组第一次启动从指定时间点开始消费)
    consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_LAST_OFFSET);
    //消费开始的时间ConsumeFromWhere.CONSUME_FROM_TIMESTAMP时生效
    //consumer.setConsumeTimestamp("201901010000");

    // Subscribe one more more topics to consume.
    consumer.subscribe("TopicTest", "*");
    // Register callback to execute on arrival of messages fetched from brokers.
    //MessageListenerConcurrently
    consumer.registerMessageListener((MessageListenerConcurrently) (msgs, context) -> {
      System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);
      //模拟消息消费失败的场景 失败后rocketmq会稍后再试 默认16次后会放到死信队列
      //默认重试间隔 1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h
      //消费失败业务逻辑代码返回ReconsumerLater NULL 或是 抛出异常都会导致重试

      //这里的msgId 是指的服务端生成的msgId
      msgs.get(0).getMsgId();
/*      if (msgs != null) {
        //重试次数
        System.out.println(msgs.get(0).getReconsumeTimes());
        System.out.println(new String(msgs.get(0).getBody()));
        throw new RuntimeException();
      }*/
      try {
        Thread.sleep(20000);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
      return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
    });

    //Launch the consumer instance.
    consumer.start();

    System.out.printf("Consumer Started.%n");
  }
}
