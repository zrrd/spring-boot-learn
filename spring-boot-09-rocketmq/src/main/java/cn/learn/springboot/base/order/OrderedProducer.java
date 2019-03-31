package cn.learn.springboot.base.order;

import java.util.List;
import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.MessageQueueSelector;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.common.message.MessageQueue;
import org.apache.rocketmq.remoting.common.RemotingHelper;

/**
 * 顺序发送
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
public class OrderedProducer {

  public static void main(String[] args) throws Exception {
    //Instantiate with a producer group name.
    DefaultMQProducer producer = new DefaultMQProducer("OrderedProducer");
    //Launch the instance.
    producer.setNamesrvAddr("47.99.73.15:9876");
    producer.start();
    String[] tags = new String[]{"TagA", "TagB", "TagC", "TagD", "TagE"};
    for (int i = 0; i < 100; i++) {
      int orderId =  i % 10;
      //Create a message instance, specifying topic, tag and message body.
      Message msg = new Message("TopicTestOrder", tags[i % tags.length], "KEY" + i,
          ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));
      //消息队列选择器 mqs topic  brokerName queueId  写队列 与读队列可以在rocketmq 中配置
      //这里的orderId 就是select 方法中的arg 经过取模运算后 相同的orderId 发送到相同的队列中去
      //order一般取业务的唯一值 如订单id
      SendResult sendResult = producer.send(msg, new MessageQueueSelector() {
        @Override
        public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {
          Integer id = (Integer) arg;
          //通过取模的方式将消息发送到一个topic中去
          int index = id % mqs.size();
          return mqs.get(index);
        }
      }, orderId);

      System.out.printf("%s%n", sendResult);
    }
    //server shutdown
    producer.shutdown();
  }
}
