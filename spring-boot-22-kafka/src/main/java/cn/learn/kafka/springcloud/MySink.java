package cn.learn.kafka.springcloud;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

/**
 * @author shaoyijiong
 * @date 2020/7/14
 */
public interface MySink {

  @Input("hello-kafka")
  SubscribableChannel demo01Input();

}
