package cn.learn.kafka.springboot;

import cn.learn.kafka.KafkaMessage;
import com.alibaba.fastjson.JSON;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

/**
 * kafka 消息生产者
 *
 * @author shaoyijiong
 * @date 2020/7/9
 */
//@Component
public class KafkaSimpleProducer {

  private final KafkaTemplate<String, String> kafkaTemplate;

  public KafkaSimpleProducer(KafkaTemplate<String, String> kafkaTemplate) {
    this.kafkaTemplate = kafkaTemplate;
  }

  public void send() {
    KafkaMessage kafkaMessage = new KafkaMessage();
    kafkaMessage.setId(1);
    kafkaMessage.setName("hello kafka");
    kafkaTemplate.send("dev_go_" + KafkaMessage.TOPIC, JSON.toJSONString(kafkaMessage));
  }

}
