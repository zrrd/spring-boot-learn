package cn.learn.springboot;

import cn.learn.springboot.aop.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBoot18AopApplicationTests {

  @Autowired
  private UserService userService;

  @Test
  public void contextLoads() {
    userService.print(null);
  }

}
