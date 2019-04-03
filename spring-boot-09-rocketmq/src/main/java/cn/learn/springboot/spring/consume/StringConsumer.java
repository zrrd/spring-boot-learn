package cn.learn.springboot.spring.consume;


import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.springframework.stereotype.Service;

/**
 * RocketMQMessageListener
 *
 * @author syj
 */
@Service
@RocketMQMessageListener(topic = "${demo.rocketmq.topic}", consumerGroup = "string_consumer")
public class StringConsumer implements RocketMQListener<String> {

  @Override
  public void onMessage(String message) {
    System.out.printf("------- StringConsumer received: %s \n", message);
  }
}