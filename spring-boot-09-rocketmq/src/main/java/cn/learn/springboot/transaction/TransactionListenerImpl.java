package cn.learn.springboot.transaction;

import java.util.Date;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import org.apache.rocketmq.client.producer.LocalTransactionState;
import org.apache.rocketmq.client.producer.TransactionListener;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.common.message.MessageExt;

/**
 * @author shaoyijiong
 * @date 2019/3/21
 */
public class TransactionListenerImpl implements TransactionListener {

  private AtomicInteger transactionIndex = new AtomicInteger(0);
  private AtomicInteger checkTimes = new AtomicInteger(0);

  private ConcurrentHashMap<String, Integer> localTrans = new ConcurrentHashMap<>();

  /**
   * 本地事务的执行逻辑实现 模拟5条消息本地事务的处理结果 先发送再执行
   *
   * @param msg Half(prepare) message
   * @param arg Custom business parameter
   */
  @Override
  public LocalTransactionState executeLocalTransaction(Message msg, Object arg) {

    LocalTransactionState state;
    //msg-4返回COMMIT_MESSAGE
    if ("msg-4".equals(msg.getKeys())) {
      state = LocalTransactionState.COMMIT_MESSAGE;
      //msg-5返回ROLLBACK_MESSAGE
    } else if ("msg-5".equals(msg.getKeys())) {
      state = LocalTransactionState.ROLLBACK_MESSAGE;
    } else {
      //这里返回unknown的目的是模拟执行本地事务突然宕机的情况（或者本地执行成功发送确认消息失败的场景）
      state = LocalTransactionState.UNKNOW;
      //假设3条消息的本地事务结果分别为1，2，3
      localTrans.put(msg.getKeys(), transactionIndex.incrementAndGet());
    }
    System.out.println(
        "executeLocalTransaction:" + msg.getKeys() + ",excute state:" + state + ",current time："
            + new Date());
    return state;
  }

  /**
   * 发送后回查
   * 回查本地事务的代码实现 第1条消息模拟unknow（例如回查的时候网络依然有问题的情况）。 第2条消息模拟本地事务处理成功结果COMMIT_MESSAGE。
   * 第3条消息模拟本地事务处理失败结果需要回滚ROLLBACK_MESSAGE。
   *
   * @param msg Check message
   */
  @Override
  public LocalTransactionState checkLocalTransaction(MessageExt msg) {
    System.out.print(
        "checkLocalTransaction message key：" + msg.getKeys() + ",current time：" + new Date());
    //根据key获取到3条消息本地事务的处理结果(实际业务场景一般是通过获取msg中的消息体数据来确定某条消息的本地事务是否执行成功)
    Integer status = localTrans.get(msg.getKeys());
    if (null != status) {
      switch (status) {
        case 1:
          System.out.println(" check result：unknow ，回查次数：" + checkTimes.incrementAndGet());
          //依然无法确定本地事务的执行结果，返回unknow，下次会继续回查结果
          return LocalTransactionState.UNKNOW;
        case 2:
          //查到本地事务执行成功，返回COMMIT_MESSAGE，producer继续发送确认消息（此逻辑无需自己写，mq本身提供）
          //或者查到本地事务执行成功了，但是想回滚掉，则这里需要返回ROLLBACK_MESSAGE，同时写回滚的逻辑，实际如何处理根据业务场景而定
          System.out.println(" check result：commit message");
          return LocalTransactionState.COMMIT_MESSAGE;
        case 3:
          //查询到本地事务执行失败，需要回滚消息。
          System.out.println(" check result：rollback message");
          return LocalTransactionState.ROLLBACK_MESSAGE;
        default:
      }
    }
    return LocalTransactionState.COMMIT_MESSAGE;
  }
}