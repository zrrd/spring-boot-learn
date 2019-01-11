package springboot.learn.mp;

import javax.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 消息队列相关操作
 *
 * @author shaoyijiong
 * @date 2019/1/9
 */
@Slf4j
@Service
public class SendService {

  private final RabbitTemplate rabbitTemplate;

  @Autowired
  public SendService(RabbitTemplate rabbitTemplate) {
    this.rabbitTemplate = rabbitTemplate;
  }

  /**
   * 需要再原来rabbit mq 中有 test.exchange 才能发送成功
   */
  public void send(Object msg) {
    rabbitTemplate.convertAndSend("test.exchange", "test.a", msg);
  }

  /**
   * 消息确认
   */
  @PostConstruct
  public void setup() {
    //消息发送完毕后 调用次方法ack代表发送是否成功
    rabbitTemplate.setConfirmCallback((correlationData, ack, cause) -> {
      //ack 为true 表示MQ已经收到消息
      if (ack) {
        log.info("发送成功");
      } else {
        log.info("发送失败");
      }
    });
  }
}
