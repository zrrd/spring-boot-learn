package springboot.learn.mp;

import com.rabbitmq.client.Channel;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.ExchangeTypes;
import org.springframework.amqp.rabbit.annotation.Exchange;
import org.springframework.amqp.rabbit.annotation.Queue;
import org.springframework.amqp.rabbit.annotation.QueueBinding;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.messaging.handler.annotation.Header;

/**
 * @author shaoyijiong
 * @date 2019/1/11
 */
@Slf4j
public class Listener {

  /**
   * 消息队列的监听 定义完了以后 Spring启动后会自动创建一个名为test.queue的队列与 test.exchange绑定 routingKey 为 test.a test.b
   */
  @RabbitListener(bindings = @QueueBinding(
      value = @Queue(value = "test.queue", durable = "true"),
      exchange = @Exchange(
          value = "test.exchange",
          ignoreDeclarationExceptions = "true",
          type = ExchangeTypes.TOPIC),
      key = {"test.a", "test.b"}))
  public void listenDelete(Object msg) {
    if (msg == null) {
      return;
    }
    log.info("收到消息{}", msg.toString());
    System.out.println("你好");
  }

  /**
   * 监听消息手动ack
   */
  @RabbitListener(queues = "test.queue")
  public void messageConsumer(String message, Channel channel,
      @Header(AmqpHeaders.DELIVERY_TAG) long tag) throws IOException {
    try {
      log.info("收到MQ中的消息" + message);
      //业务操作  肯发送异常
      TimeUnit.SECONDS.sleep(2);

      //ack 告诉mq  我已经收到了
      channel.basicAck(tag, false);
    } catch (Exception e) {
      e.printStackTrace();
      //异常请客： 根据需要 重发丢弃
      //重发一定次数后 丢弃  日志管理
      channel.basicNack(tag, false, true);
      //通过人工干预
    }

  }
}
