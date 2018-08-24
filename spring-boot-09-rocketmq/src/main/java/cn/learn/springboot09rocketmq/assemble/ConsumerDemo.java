package cn.learn.springboot09rocketmq.assemble;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

/**
 * 消费者例子.
 *
 * @author 邵益炯
 * @date 2018/8/24
 */
@Component
public class ConsumerDemo {

  /**
   * 通过事件监听的方式拿到消息. condition 监听的topic 和tags
   *
   * @param event 监听的消息
   */
  @EventListener(condition = "#event.msgs[0].topic=='TopicTest1' && #event.msgs[0].tags=='TagA'")
  public void rocketmqMsgListen(RocketmqEvent event) {
    //DefaultMQPushConsumer consumer = event.getConsumer();
    try {
      System.out.println("监听到一个消息达到：" + event.getMsgs().get(0).getMsgId());
      // TODO 进行业务处理
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
