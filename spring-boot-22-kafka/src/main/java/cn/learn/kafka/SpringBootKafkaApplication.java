package cn.learn.kafka;

import cn.learn.kafka.springcloud.MySink;
import cn.learn.kafka.springcloud.MySource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.stream.annotation.EnableBinding;

/**
 * @author shaoyijiong
 * @date 2019/5/14
 */
@SpringBootApplication
@EnableBinding({MySource.class, MySink.class})
public class SpringBootKafkaApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBootKafkaApplication.class, args);
  }
}
