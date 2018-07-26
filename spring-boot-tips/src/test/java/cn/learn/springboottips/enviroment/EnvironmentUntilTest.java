package cn.learn.springboottips.enviroment;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EnvironmentUntilTest {

  @Autowired
  EnvironmentUntil environmentUntil;


  @Test
  public void contextLoads() {
    String profile = environmentUntil.getProfile();
    System.out.println(profile);
  }
}