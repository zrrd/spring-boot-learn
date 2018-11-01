package cn.learn.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * .
 * @author shaoyijiong
 */

@SpringBootApplication
@EnableConfigurationProperties
@EnableScheduling
public class RocketmqApplication {

  public static void main(String[] args) {
    SpringApplication.run(RocketmqApplication.class, args);
  }
}
