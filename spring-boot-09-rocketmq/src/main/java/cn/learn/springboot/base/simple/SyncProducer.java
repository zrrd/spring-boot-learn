package cn.learn.springboot.base.simple;

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
    for (int i = 0; i < 1; i++) {
      //创建一个消息 指定 topic tag 和消息内容 /* Topic */ /* Tag */ /* Message body */
      Message msg = new Message("TopicTest", "TagA",
          ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET)
      );
      //向 brokers 中的一个 broker 发送消息
      //SendResult 有哪些属性呢 sendStatus 发送的状态 | msgId 客户端生成消息的id | messageQueue 消息进入到哪个topic队列中
      //queueOffset 队列的偏移量 | transactionId 事务相关普通消息为null | offsetMsgId 服务端生成的消息id |
      //regionId 地域信息 例如 "cn-hangzhou" | traceOn 是否启用消息轨迹(消息的链路 到达时间) |
      SendResult sendResult = producer.send(msg);
      System.out.printf("%s%n", sendResult);
    }
    //关闭生产者
    producer.shutdown();
  }
}

