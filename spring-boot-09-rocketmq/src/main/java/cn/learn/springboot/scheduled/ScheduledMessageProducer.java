package cn.learn.springboot.scheduled;

import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.common.message.Message;

/**
 * 定时发送
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
public class ScheduledMessageProducer {

  public static void main(String[] args) throws Exception {
    // Instantiate a producer to send scheduled messages
    DefaultMQProducer producer = new DefaultMQProducer("ScheduledMessageProducer");
    producer.setNamesrvAddr("47.99.73.15:9876");
    // Launch producer
    producer.start();
    int totalMessagesToSend = 100;
    for (int i = 0; i < totalMessagesToSend; i++) {
      Message message = new Message("TopicTest", ("Hello scheduled message " + i).getBytes());
      // This message will be delivered to consumer 10 seconds later.
      //messageDelayLevel=1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h
      message.setDelayTimeLevel(3);
      // Send the message
      producer.send(message);
    }

    // Shutdown producer after use.
    producer.shutdown();
  }

}
