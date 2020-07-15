package cn.learn.kafka.springcloud;

import cn.learn.kafka.KafkaMessage;
import java.time.LocalDateTime;
import java.util.Random;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Component;

/**
 * @author shaoyijiong
 * @date 2020/7/14
 */
@Component
public class KafkaStreamProducer {

  private final MySource mySource;

  public KafkaStreamProducer(MySource mySource) {
    this.mySource = mySource;
  }

  public void sendMessage() {
    // <1> 创建 Message
    KafkaMessage message = new KafkaMessage()
        .setId(new Random().nextInt()).setLocalDateTime(LocalDateTime.now()).setName("hello world");
    // <2> 创建 Spring Message 对象
    Message<KafkaMessage> springMessage = MessageBuilder.withPayload(message).build();
    // <3> 发送消息
    mySource.demo01Output().send(springMessage);
  }
}
