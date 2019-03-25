package cn.learn.springboot.base.simple;

import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.common.RemotingHelper;

/**
 * 单向发送 单向传输用于需要中等可靠性的情况，例如日志收集。
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
public class OnewayProducer {

  public static void main(String[] args) throws Exception {
    //Instantiate with a producer group name.
    DefaultMQProducer producer = new DefaultMQProducer("OnewayProducer");
    // Specify name server addresses.
    producer.setNamesrvAddr("47.99.73.15:9876");
    //Launch the instance.
    producer.start();
    for (int i = 0; i < 10; i++) {
      //Create a message instance, specifying topic, tag and message body./* Topic */ /* Tag */ /* Message body */
      Message msg = new Message("TopicTest",
          "TagA", ("Hello RocketMQ Oneway" + i).getBytes(RemotingHelper.DEFAULT_CHARSET)
      );
      //Call send message to deliver message to one of brokers.
      producer.sendOneway(msg);

    }
    //Shut down once the producer instance is not longer in use.
    producer.shutdown();
  }
}
