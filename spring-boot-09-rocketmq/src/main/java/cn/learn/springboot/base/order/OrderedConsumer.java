package cn.learn.springboot.base.order;

import java.util.List;
import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeOrderlyContext;
import org.apache.rocketmq.client.consumer.listener.ConsumeOrderlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerOrderly;
import org.apache.rocketmq.common.consumer.ConsumeFromWhere;
import org.apache.rocketmq.common.message.MessageExt;

/**
 * 顺序消费
 *
 * @author shaoyijiong
 * @date 2019/3/20
 */
public class OrderedConsumer {

  public static void main(String[] args) throws Exception {
    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("OrderedConsumer");

    consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
    // Specify name server addresses.
    consumer.setNamesrvAddr("47.99.73.15:9876");
    consumer.subscribe("TopicTestOrder", "TagA || TagC || TagD");

    consumer.registerMessageListener(new MessageListenerOrderly() {

      //需要用户注册监听器时实现 new MessageListenerOrderly()；实现之后对应的ConsumeMessageOrderlyService会启动，
      // 该服务的特点是某一个队列，在同一时间只能有一个线程访问，只有等拿到锁的线程消费成功后释放锁，其他线程才能继续消费该队列。
      // 劣势是降低了消息处理的吞吐量，当前一条消息消费出现问题时，会阻塞后续的流程。
      // 一个队列同一时间只有一个消费者  本地与远端都是
      // 实现方式 两把锁  broker 的 queue 一把锁保证只有一个消费者消费 本地一把锁 保证线程池中只有一个线程消费消息
      @Override
      public ConsumeOrderlyStatus consumeMessage(List<MessageExt> msgs,
          ConsumeOrderlyContext context) {

        context.setAutoCommit(true);
        for (MessageExt messageExt : msgs) {
          System.out.println(
              Thread.currentThread().getName() + "--topic:" + messageExt.getTopic() + "-- tag:"
                  + messageExt.getTags() + "-- queueId" + messageExt.getQueueId() + "-- body:"
                  + new String(messageExt.getBody()));
          try {
            Thread.sleep(messageExt.getQueueId() * 1000);
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
        }
        return ConsumeOrderlyStatus.SUCCESS;
      }
    });

    consumer.start();

    System.out.printf("Consumer Started.%n");
  }
}
