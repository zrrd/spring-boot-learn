package cn.learn.springboot.bean;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author shaoyijiong
 * @date 2021/2/25
 */
@Configuration
public class BeanConfig {

  @Bean
  public Person person() {
    Person p = new Person();
    p.setName("hello");
    p.setAge(12);
    return p;
  }
}
