package cn.learn.springboot07.listener;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * SpringBoot启动配置.
 *
 * @author shaoyijiong
 * @date 2018/7/24
 */
@Component
public class HelloApplicationRunner implements ApplicationRunner {

  @Override
  public void run(ApplicationArguments applicationArguments) throws Exception {
    System.out.println("ApplicationRunner");

  }
}
