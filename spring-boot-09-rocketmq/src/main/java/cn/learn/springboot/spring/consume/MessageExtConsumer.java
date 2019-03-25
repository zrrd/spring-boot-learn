package cn.learn.springboot.spring.consume;


import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.common.UtilAll;
import org.apache.rocketmq.common.consumer.ConsumeFromWhere;
import org.apache.rocketmq.common.message.MessageExt;
import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.apache.rocketmq.spring.core.RocketMQPushConsumerLifecycleListener;
import org.springframework.stereotype.Service;

/**
 * MessageExtConsumer, consume listener impl class.
 * @author syj
 */
@Service
@RocketMQMessageListener(topic = "message-ext-topic", selectorExpression = "tag1",
    consumerGroup = "${spring.application.name}-message-ext-consumer")
public class MessageExtConsumer implements RocketMQListener<MessageExt>,
    RocketMQPushConsumerLifecycleListener {

  @Override
  public void onMessage(MessageExt message) {
    System.out.printf("------- MessageExtConsumer received message, msgId: %s, body:%s \n",
        message.getMsgId(), new String(message.getBody()));
  }

  /**
   * 消费者配置 消费开始的时间 消费的线程池
   */
  @Override
  public void prepareStart(DefaultMQPushConsumer consumer) {
    // 设置从现在开始消息
    consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_TIMESTAMP);
    consumer.setConsumeTimestamp(UtilAll.timeMillisToHumanString3(System.currentTimeMillis()));
  }
}
