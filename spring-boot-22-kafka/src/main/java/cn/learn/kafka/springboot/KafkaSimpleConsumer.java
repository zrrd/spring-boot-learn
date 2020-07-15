package cn.learn.kafka.springboot;

import cn.learn.kafka.KafkaMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

/**
 * kafka 消息消费者
 *
 * @author shaoyijiong
 * @date 2020/7/9
 */
@Slf4j
//@Component
public class KafkaSimpleConsumer {

  //@KafkaListener(topics = KafkaMessage.TOPIC, groupId = "demo01-consumer-group-" + KafkaMessage.TOPIC)
  public void onMessage(KafkaMessage message) {
    log.info("[onMessage][线程编号:{} 消息内容：{}]", Thread.currentThread().getId(), message);
  }


  @KafkaListener(topics = "${mq-pre}" + KafkaMessage.TOPIC, groupId =
      "demo01-consumer-group-1" + KafkaMessage.TOPIC)
  public void onMessage(String message) {
    log.info("[onMessage][线程编号:{} 消息内容：{}]", Thread.currentThread().getId(), message);
  }
}
