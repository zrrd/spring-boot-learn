package springboot.learn.springboot02config.bean;

import java.util.List;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 配置测试
 * 将配置中的属性通过ConfigurationProperties 映射到类中去
 *
 * @author shaoyijiong
 * @since 2018/7/2
 */
@Component
@ConfigurationProperties()
public class Person {

  private List<Integer> num;
  private String name;
  private Integer age;

  @Override
  public String toString() {
    return "person{" +
        "num=" + num +
        ", name='" + name + '\'' +
        ", age=" + age +
        '}';
  }
}
