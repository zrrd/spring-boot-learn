package cn.learn.kafka.springcloud;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

/**
 * @author shaoyijiong
 * @date 2020/7/14
 */
public interface MySource {

  @Output("hello-kafka")
  MessageChannel demo01Output();

}