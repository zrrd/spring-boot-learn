package cn.learn.springboot.base.broadcasting;

import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.common.RemotingHelper;

/**
 * <pre>
 * 一条消息被多个consumer消费，即使这些consumer属于同一个ConsumerGroup,
 * 消息也会被ConsumerGroup中的每个Consumer都消费一次，
 * 广播消费中ConsumerGroup概念可以认为在消息划分方面无意义
 * 非广播发送 一个订阅组只有一个实例能接收到这个消息
 * </pre>
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
public class BroadcastProducer {

  public static void main(String[] args) throws Exception {
    DefaultMQProducer producer = new DefaultMQProducer("BroadcastProducer");
    producer.setNamesrvAddr("47.99.73.15:9876");
    producer.start();
    for (int i = 0; i < 10; i++) {
      Message msg = new Message("TopicTestBroadcast",
          "TagA",
          "OrderID188",
          "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));
      SendResult sendResult = producer.send(msg);
      System.out.printf("%s%n", sendResult);
    }
    producer.shutdown();
  }
}
