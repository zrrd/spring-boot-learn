package cn.learn.springboot.bean;

import org.springframework.beans.factory.annotation.Autowired;
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

  private final Person person;

  @Autowired
  public HelloApplicationRunner(Person person) {
    this.person = person;
  }

  @Override
  public void run(ApplicationArguments applicationArguments) {
    System.out.println(person);
  }
}
