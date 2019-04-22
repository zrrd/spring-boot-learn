package cn.learn.springboot.base.batch;

import java.util.concurrent.TimeUnit;
import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.client.exception.MQClientException;

/**
 * @author shaoyijiong
 * @date 2019/3/31
 */
public class BatchConsumer {

  public static void main(String[] args) throws MQClientException {

    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("SimpleConsumer");

    consumer.setNamesrvAddr("47.99.73.15:9876");
    consumer.subscribe("TopicTest", "*");

    //批量消费的上限 默认为一
    consumer.setConsumeMessageBatchMaxSize(1024);
    consumer.registerMessageListener((MessageListenerConcurrently) (msgs, context) -> {
      System.out.println(msgs.size());

      System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);
      try {
        TimeUnit.SECONDS.sleep(1);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }

      return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
    });
    consumer.start();
  }
}
