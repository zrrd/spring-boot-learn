package cn.learn.springboot.batch;

import java.util.ArrayList;
import java.util.List;
import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.common.RemotingHelper;

/**
 * 同一批次的消息应该具有：相同的主题，相同的waitStoreMsgOK和没有计划支持。 此外，一批邮件的总大小不应超过1MiB。
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
public class BatchProducer {

  public static void main(String[] args) throws Exception {
    //指定生产者名称
    DefaultMQProducer producer = new
        DefaultMQProducer("BatchProducer");
    //指定Name Server Addr
    producer.setNamesrvAddr("47.99.73.15:9876");
    //启动生成者
    producer.start();
    String topic = "TopicTest";
    List<Message> messages = new ArrayList<>();
    messages.add(new Message(topic, "TagA", "OrderID001", "Hello world 0".getBytes()));
    messages.add(new Message(topic, "TagA", "OrderID002", "Hello world 1".getBytes()));
    messages.add(new Message(topic, "TagA", "OrderID003", "Hello world 2".getBytes()));
    try {
      producer.send(messages);
    } catch (Exception e) {
      e.printStackTrace();
      //handle the error
    }
    //关闭生产者
    producer.shutdown();
  }
}

