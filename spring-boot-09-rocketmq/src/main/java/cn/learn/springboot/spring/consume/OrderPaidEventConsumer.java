package cn.learn.springboot.spring.consume;


import cn.learn.springboot.spring.domain.OrderPaidEvent;
import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.springframework.stereotype.Service;

/**
 * OrderPaidEventConsumer
 * 接收对象
 *
 * @author syj
 */
@Service
@RocketMQMessageListener(topic = "${demo.rocketmq.orderTopic}",
    consumerGroup = "order-paid-consumer")
public class OrderPaidEventConsumer implements RocketMQListener<OrderPaidEvent> {

  @Override
  public void onMessage(OrderPaidEvent orderPaidEvent) {
    System.out.printf("------- OrderPaidEventConsumer received: %s \n", orderPaidEvent);
  }
}
