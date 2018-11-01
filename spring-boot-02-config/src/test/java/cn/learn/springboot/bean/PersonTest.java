package cn.learn.springboot.bean;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PersonTest {

  @Autowired
  Person person;

  @Test
  public void testToString() throws Exception {
    System.out.println(person);
  }

}