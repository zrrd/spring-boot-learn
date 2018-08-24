package cn.learn.springboot09rocketmq.assemble;

import java.util.Random;
import javax.annotation.Resource;
import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.SendCallback;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.client.producer.TransactionMQProducer;
import org.apache.rocketmq.common.message.Message;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 生产者测试.
 *
 * @author 邵益炯
 * @date 2018/8/24
 */
@RestController
public class ProducerDemo {

  @Resource
  private DefaultMQProducer defaultProducer;

  @Resource
  private TransactionMQProducer transactionProducer;

  private int random = new Random().nextInt(10000);

  /**
   * 普通发送.
   */
  @RequestMapping(value = "/sendMsg", method = RequestMethod.GET)
  public void sendMsg() {
    // 构造消息 topic tags keys body
    Message msg = new Message("TopicTest1", "TagA", "OrderID00" + random,
        ("Hello zebra mq" + random).getBytes());
    try {
      defaultProducer.send(msg, new SendCallback() {

        @Override
        public void onSuccess(SendResult sendResult) {
          System.out.println(sendResult);
          // TODO 发送成功处理
        }

        @Override
        public void onException(Throwable e) {
          e.printStackTrace();
          // TODO 发送失败处理
        }
      });
      random = new Random().nextInt(10000);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  /**
   * 带事物的发送消息.
   */
  @RequestMapping(value = "/sendTransactionMsg", method = RequestMethod.GET)
  public String sendTransactionMsg() {
    SendResult sendResult = null;
    try {
      // 构造消息 topic tags keys body
      Message msg = new Message("TopicTest1", "TagA", "OrderID001", ("Hello zebra mq").getBytes());

      // 发送事务消息，LocalTransactionExecute的executeLocalTransactionBranch方法中执行本地逻辑
      sendResult = transactionProducer.sendMessageInTransaction(msg, null);
    } catch (Exception e) {
      e.printStackTrace();
    }
    assert sendResult != null;
    return sendResult.toString();
  }

  /**
   * 严格顺序发送.
   */
  @RequestMapping(value = "/sendMsgOrder", method = RequestMethod.GET)
  public void sendMsgOrder() {
    Message msg = new Message("TopicTest1", "TagA", "OrderID00" + random,
        ("Hello zebra mq" + new Random().nextInt(10000)).getBytes());
    try {
      defaultProducer.send(msg, (mqs, msg1, arg) -> {
        System.out.println("MessageQueue" + arg);
        int index = ((Integer) arg) % mqs.size();
        return mqs.get(index);
      }, random);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
