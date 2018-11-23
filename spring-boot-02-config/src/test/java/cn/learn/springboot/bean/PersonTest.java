package cn.learn.springboot.bean;

import java.util.List;
import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@ConfigurationProperties
public class PersonTest  {

  private List<String> angular;

  @Resource
  private EnvironmentUtils environmentUtils;
  @Test
  public void testToString() {
    System.out.println(environmentUtils.getProfile());
    System.out.println(angular);
  }

}