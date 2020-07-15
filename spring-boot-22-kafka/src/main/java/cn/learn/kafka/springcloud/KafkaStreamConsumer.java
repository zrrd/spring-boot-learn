package cn.learn.kafka.springcloud;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.stereotype.Component;

/**
 * @author shaoyijiong
 * @date 2020/7/14
 */
@Slf4j
@Component
public class KafkaStreamConsumer {

  @StreamListener("hello-kafka")
  public void onMessage(String message) {
    log.info("[onMessage][线程编号:{} 消息内容：{}]", Thread.currentThread().getId(), message);
  }
}
