package cn.learn.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

/**
 * 开启异步调用.
 */
@EnableAsync
@SpringBootApplication
public class AsyncApplication {

  public static void main(String[] args) {
    SpringApplication.run(AsyncApplication.class, args);
  }
}
