package cn.learn.springboot09rocketmq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties
public class SpringBoot09RocketmqApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBoot09RocketmqApplication.class, args);
  }
}
