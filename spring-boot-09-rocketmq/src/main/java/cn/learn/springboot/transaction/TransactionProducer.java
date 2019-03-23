package cn.learn.springboot.transaction;

import java.io.UnsupportedEncodingException;
import org.apache.rocketmq.client.exception.MQClientException;
import org.apache.rocketmq.client.producer.TransactionListener;
import org.apache.rocketmq.client.producer.TransactionMQProducer;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.common.RemotingHelper;

/**
 * 事务生产者的主要作用是本地事务执行成功 并且也成功发送到rocketmq服务器上
 * @author syj
 */
public class TransactionProducer {

  public static void main(String[] args) throws MQClientException, InterruptedException {
    //事务执行的listener，由用户实现及接口，提供本地事务执行的代码，以及回查本地事务处理结果的逻辑。
    TransactionListener transactionListener = new TransactionListenerImpl();

    TransactionMQProducer producer = new TransactionMQProducer("TransactionProducer");
    producer.setNamesrvAddr("47.99.73.15:9876");
    producer.setTransactionListener(transactionListener);
    producer.start();

    //模拟发送5条消息
    for (int i = 1; i < 6; i++) {
      try {
        Message msg = new Message("TopicTest", null, "msg-" + i,
            ("Hello RocketMQ " + i).getBytes(
                RemotingHelper.DEFAULT_CHARSET));
        producer.sendMessageInTransaction(msg, null);
        Thread.sleep(10);
      } catch (MQClientException | UnsupportedEncodingException e) {
        e.printStackTrace();
      }
    }

    Thread.sleep(Integer.MAX_VALUE);
    producer.shutdown();
  }
}