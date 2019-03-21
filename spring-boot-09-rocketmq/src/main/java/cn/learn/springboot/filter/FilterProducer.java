package cn.learn.springboot.filter;

import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.common.RemotingHelper;

/**
 * 生产者
 *
 * @author shaoyijiong
 * @date 2019/3/21
 */
public class FilterProducer {

  public static void main(String[] args)
      throws Exception {
    DefaultMQProducer producer = new DefaultMQProducer("TopicTest");
    producer.setNamesrvAddr("47.99.73.15:9876");
    producer.start();
    for (int i = 0; i < 5; i++) {
      Message msg = new Message("TopicTest",
          "Tag A",
          ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET)
      );
      // 添加额外属性
      msg.putUserProperty("a", String.valueOf(i));
      SendResult sendResult = producer.send(msg);
    }

    producer.shutdown();
  }
}
