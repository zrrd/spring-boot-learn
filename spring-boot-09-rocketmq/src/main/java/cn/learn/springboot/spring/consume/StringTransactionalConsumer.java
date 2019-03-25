package cn.learn.springboot.spring.consume;

import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.springframework.stereotype.Service;

/**
 * @author shaoyijiong
 * @date 2019/3/25
 */
@Service
@RocketMQMessageListener(topic = "${demo.rocketmq.transTopic}",
    consumerGroup = "string_trans_consumer")
public class StringTransactionalConsumer implements RocketMQListener<String> {

  @Override
  public void onMessage(String message) {
    System.out.printf("------- StringTransactionalConsumer received: %s \n", message);
  }
}
