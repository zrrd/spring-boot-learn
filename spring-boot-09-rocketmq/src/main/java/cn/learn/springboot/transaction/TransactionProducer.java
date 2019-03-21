package cn.learn.springboot.transaction;

import java.io.UnsupportedEncodingException;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
import org.apache.rocketmq.client.exception.MQClientException;
import org.apache.rocketmq.client.producer.LocalTransactionState;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.client.producer.TransactionListener;
import org.apache.rocketmq.client.producer.TransactionMQProducer;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.common.message.MessageExt;
import org.apache.rocketmq.remoting.common.RemotingHelper;

/**
 * 事务的生产者
 *
 * @author shaoyijiong
 * @date 2019/3/21
 */
public class TransactionProducer {


  /**
   * <pre>
   * 1.发送方 向 MQ 服务端发送消息。
   * 2.MQ Server 将消息持久化成功之后，向发送方 ACK 确认消息已经发送成功，此时消息为半消息。
   * 3.发送方开始执行本地事务逻辑。
   * 4.发送方根据本地事务执行结果向 MQ Server 提交二次确认（Commit 或是 Rollback），
   * MQ Server 收到 Commit 状态则将半消息标记为可投递，订阅方最终将收到该消息；MQ Server 收到 Rollback 状态则删除半消息，
   * 订阅方将不会接受该消息。
   * 5.在断网或者是应用重启的特殊情况下，上述步骤4提交的二次确认最终未到达 MQ Server，
   * 经过固定时间后 MQ Server 将对该消息发起消息回查。
   * 6.发送方收到消息回查后，需要检查对应消息的本地事务执行的最终结果。
   * 7.发送方根据检查得到的本地事务的最终状态再次提交二次确认，MQ Server 仍按照步骤4对半消息进行操作。
   * 事务消息发送对应步骤1、2、3、4，事务消息回查对应步骤5、6、7。
   * </pre>
   */
  private static class TransactionListenerImpl implements TransactionListener {

    private AtomicInteger transactionIndex = new AtomicInteger(0);

    private ConcurrentHashMap<String, Integer> localTrans = new ConcurrentHashMap<>();

    /**
     * <pre>
     * Half(Prepare) Message
     * 指的是暂不能投递的消息，发送方已经将消息成功发送到了 MQ 服务端，
     * 但是服务端未收到生产者对该消息的二次确认，此时该消息被标记成“暂不能投递”状态，处于该种状态下的消息即半消息。
     * </pre>
     */
    @Override
    public LocalTransactionState executeLocalTransaction(Message msg, Object arg) {
      System.out.println("executeLocalTransaction");
      int value = transactionIndex.getAndIncrement();
      int status = value % 3;
      localTrans.put(msg.getTransactionId(), status);
      return LocalTransactionState.UNKNOW;
    }

    /**
     * <pre>
     * 消息回查
     * 由于网络闪断、生产者应用重启等原因，导致某条事务消息的二次确认丢失，MQ 服务端通过扫描发现某条消息长期处于“半消息”时，
     * 需要主动向消息生产者询问该消息的最终状态（Commit 或是 Rollback），该过程即消息回查。
     * </pre>
     */
    @Override
    public LocalTransactionState checkLocalTransaction(MessageExt msg) {
      System.out.println("checkLocalTransaction");
      Integer status = localTrans.get(msg.getTransactionId());
      if (null != status) {
        switch (status) {
          case 0:
            return LocalTransactionState.UNKNOW;
          case 1:
            return LocalTransactionState.COMMIT_MESSAGE;
          case 2:
            return LocalTransactionState.ROLLBACK_MESSAGE;
          default:
        }
      }
      return LocalTransactionState.COMMIT_MESSAGE;
    }
  }

  public static void main(String[] args) throws MQClientException, InterruptedException {
    TransactionListener transactionListener = new TransactionListenerImpl();
    TransactionMQProducer producer = new TransactionMQProducer("please_rename_unique_group_name");
    ExecutorService executorService = new ThreadPoolExecutor(2, 5, 100, TimeUnit.SECONDS,
        new ArrayBlockingQueue<>(2000), r -> {
      Thread thread = new Thread(r);
      thread.setName("client-transaction-msg-check-thread");
      return thread;
    });

    producer.setNamesrvAddr("47.99.73.15:9876");
    producer.setExecutorService(executorService);
    producer.setTransactionListener(transactionListener);
    producer.start();

    String[] tags = new String[]{"TagA", "TagB", "TagC", "TagD", "TagE"};
    for (int i = 0; i < 10; i++) {
      try {
        Message msg =
            new Message("TopicTest", tags[i % tags.length], "KEY" + i,
                ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));
        SendResult sendResult = producer.sendMessageInTransaction(msg, null);
        System.out.printf("%s%n", sendResult);

        Thread.sleep(10);
      } catch (MQClientException | UnsupportedEncodingException e) {
        e.printStackTrace();
      }
    }

    for (int i = 0; i < 100000; i++) {
      Thread.sleep(1000);
    }
    producer.shutdown();
  }
}