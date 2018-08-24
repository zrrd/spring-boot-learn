package cn.learn.springboot09rocketmq.quick;

import java.util.ArrayList;
import java.util.List;
import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.MessageQueueSelector;
import org.apache.rocketmq.client.producer.SendCallback;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.common.RemotingHelper;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 生产者.
 *
 * @author shaoyijiong
 * @date 2018/7/30
 */
@Component
@ConfigurationProperties(prefix = "rocketmq")
public class Producer {

  /**
   * namesrvAddr 地址,通过配置文件.
   */
  private String namesrvAddr;

  public void sendMessage() throws Exception {
    DefaultMQProducer producer = new DefaultMQProducer("producer1");
    producer.setNamesrvAddr(namesrvAddr);
    producer.start();

    //异步模式下发送失败重试次数
    producer.setRetryTimesWhenSendAsyncFailed(0);

    Message msg;

    //可靠的同步传输  应用：可靠的同步传输用于广泛的场景，如重要的通知消息，短信通知，短信营销系统等。
    //将消息转为字节,编码为UTF-8
    msg = new Message("sync", "", "同步发送哦".getBytes(RemotingHelper.DEFAULT_CHARSET));
    SendResult sendResult = producer.send(msg);
    System.out.println("同步发送成功" + sendResult);

    //可靠的异步传输 应用：异步传输通常用于响应时间敏感的业务场景。
    msg = new Message("async", "", "异步发送哦".getBytes(RemotingHelper.DEFAULT_CHARSET));
    //异步发送,与回调
    producer.send(msg, new SendCallback() {
      @Override
      public void onSuccess(SendResult sendResult) {
        System.out.printf("异步发送成功" + sendResult);
      }

      @Override
      public void onException(Throwable e) {
        System.out.printf("异步发送失败");
        e.printStackTrace();
      }
    });

    //单向发送 应用：单向传输用于需要中等可靠性的情况，例如日志收集。
    msg = new Message("oneWay", "", "单向发送哦".getBytes(RemotingHelper.DEFAULT_CHARSET));
    producer.sendOneway(msg);

    //严格顺序发送 根据orderId
    int orderId = 1;
    msg = new Message("orderly", "", "顺序发送哦".getBytes(RemotingHelper.DEFAULT_CHARSET));
    SendResult sendResult1 = producer.send(msg, (MessageQueueSelector) (mqs, msg1, arg) -> {
      Integer id = (Integer) arg;
      int index = id % mqs.size();
      return mqs.get(index);
    }, orderId);
    System.out.println("顺序发送成功" + sendResult1);

    //延时发送
    //RcoketMQ的延时等级为：1s，5s，10s，30s，1m，2m，3m，4m，5m，6m，7m，8m，9m，10m，20m，30m，1h，2h。
    //level=0，表示不延时。level=1，表示 1 级延时，对应延时 1s。level=2 表示 2 级延时，对应5s，以此类推。
    msg = new Message("delay", "", "延时发送哦".getBytes(RemotingHelper.DEFAULT_CHARSET));
    msg.setDelayTimeLevel(3);
    producer.send(msg);

    List list = new ArrayList();
    producer.shutdown();
  }
}
