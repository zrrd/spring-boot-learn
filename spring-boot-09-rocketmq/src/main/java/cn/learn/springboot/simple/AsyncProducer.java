package cn.learn.springboot.simple;

import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.SendCallback;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.common.RemotingHelper;

/**
 * 发送异步消息 异步传输通常用于响应时间敏感的业务场景。 如视频等
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
public class AsyncProducer {

  public static void main(String[] args) throws Exception {
    //指定生产者组名
    DefaultMQProducer producer = new DefaultMQProducer("AsyncProducer");
    // 指定Name Server Addr
    producer.setNamesrvAddr("47.99.73.15:9876");
    //Launch the instance.
    producer.start();
    producer.setRetryTimesWhenSendAsyncFailed(0);
    for (int i = 0; i < 10; i++) {
      final int index = i;
      //Create a message instance, specifying topic, tag and message body.
      Message msg = new Message("TopicTest",
          "TagA",
          "OrderID188",
          "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));
      producer.send(msg, new SendCallback() {
        @Override
        public void onSuccess(SendResult sendResult) {
          System.out.printf("%-10d OK %s %n", index,
              sendResult.getMsgId());
        }

        @Override
        public void onException(Throwable e) {
          System.out.printf("%-10d Exception %s %n", index, e);
          e.printStackTrace();
        }
      });
    }
    Thread.sleep(100000);
    //Shut down once the producer instance is not longer in use.
    producer.shutdown();
  }
}
