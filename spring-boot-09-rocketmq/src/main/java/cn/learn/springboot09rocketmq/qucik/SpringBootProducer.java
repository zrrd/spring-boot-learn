package cn.learn.springboot09rocketmq.qucik;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

/**
 * 通过SpringBoot的方式简化消费者.
 *
 * @author shaoyijiong
 * @date 2018/7/30
 */
@ConfigurationProperties(prefix = "rocketmq")
@Component
public class SpringBootProducer {

  /**
   * namesrvAddr 地址,通过配置文件.
   */
  private String namesrvAddr;

  /**
   * 通过监听事件的方式来获得发送消息.
   * @param event 自定义的事件
   */
  @EventListener(condition = "#event.topic=='sync' and #event.tag =='*'")
  public void receiveMessage(RocketmqEvent event) {
    //DefaultMQPushConsumer consumer = event.getConsumer();
    try {
      System.out.println(
          "com.guosen.client.controller.consumerDemo监听到一个消息达到：" + event.getMsgs().get(0)
              .getMsgId());
      // TODO 进行业务处理
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
