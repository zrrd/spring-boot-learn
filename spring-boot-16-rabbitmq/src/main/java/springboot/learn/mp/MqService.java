package springboot.learn.mp;

import com.rabbitmq.client.Channel;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import javax.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.stereotype.Service;

/**
 * 消息队列相关操作
 *
 * @author shaoyijiong
 * @date 2019/1/9
 */
@Slf4j
@Service
public class MqService {

  private final RabbitTemplate rabbitTemplate;

  @Autowired
  public MqService(RabbitTemplate rabbitTemplate) {
    this.rabbitTemplate = rabbitTemplate;
  }

  private MessageProperties messageProperties = new MessageProperties();

  /**
   * 自己封装 Message
   */
  public void sendMsg(String msg) {
    rabbitTemplate.send("TestExchange", "test", new Message(msg.getBytes(), messageProperties));
  }

  /**
   * 自动 Java 对象包装成 Message 对象，Java 对象需要实现 Serializable 序列化接口
   */
  public void sendMsgCas(String msg) {
    rabbitTemplate.convertAndSend("TestExchange", "test", msg);
  }

  /**
   * 方便确认是那条消息收到了 自动 Java 对象包装成 Message 对象，Java 对象需要实现 Serializable 序列化接口
   */
  public void sendMsgCas(String msg, String id) {
    rabbitTemplate.convertAndSend("TestExchange", "test", msg, new CorrelationData(id));
  }

  /**
   * 消息的cas确认
   */
  @PostConstruct
  private void setup() {
    //消息发送完毕后 调用次方法ack代表发送是否成功
    rabbitTemplate.setConfirmCallback((correlationData, ack, cause) -> {
      String id = correlationData.getId();

      //ack 为true 表示MQ已经收到消息
      if (ack) {
        log.info("id为{}的消息发送成功", id);
        return;
      }

      log.error("id为{}的消息发送失败" + cause, id);
    });
  }


  /**
   * 参数详解
   * <p>deliveryTag:该消息的index</p>
   * <p>multiple：是否批量.true:将一次性ack所有小于deliveryTag的消息。</p>
   * <p>requeue：被拒绝的是否重新入队列</p>
   */
  @RabbitListener(queues = "TestQueue")
  public void messageConsumer(String message, Channel channel,
      @Header(AmqpHeaders.DELIVERY_TAG) long tag) throws IOException {
    try {
      log.info("收到消息了{}", message);
      //模拟业务操作
      TimeUnit.SECONDS.sleep(2);

      //操作完成后手动ack
      channel.basicAck(tag, false);
    } catch (Exception e) {
      //异常情况： 根据需要 重发丢弃
      //重发一定次数后 丢弃  日志管理
      log.error("消息处理错误", e);
      channel.basicNack(tag, false, true);
    }

  }


}
