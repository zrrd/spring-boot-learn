package cn.learn.springboot.simple;

import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.common.RemotingHelper;

/**
 * 同步发送 可靠的同步传输用于广泛的场景，如重要的通知消息，短信通知，短信营销系统等 (有返回值)
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
public class SyncProducer {

  public static void main(String[] args) throws Exception {
    //指定生产者名称
    DefaultMQProducer producer = new
        DefaultMQProducer("SyncProducer");
    //指定Name Server Addr
    producer.setNamesrvAddr("47.99.73.15:9876");
    //启动生成者
    producer.start();
    for (int i = 0; i < 10; i++) {
      //创建一个消息 指定 topic tag 和消息内容 /* Topic */ /* Tag */ /* Message body */
      Message msg = new Message("TopicTest", "TagA",
          ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET)
      );
      //向 brokers 中的一个 broker 发送消息
      SendResult sendResult = producer.send(msg);
      System.out.printf("%s%n", sendResult);
    }
    //关闭生产者
    producer.shutdown();
  }
}

