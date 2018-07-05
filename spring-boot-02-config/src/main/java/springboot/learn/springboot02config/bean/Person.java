package springboot.learn.springboot02config.bean;

import java.util.List;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 配置测试
 * 将配置中的属性通过ConfigurationProperties 映射到类中去
 *
 * @author shaoyijiong
 * @since 2018/7/2
 */
@Data
@Component
@ConfigurationProperties()
public class Person {

  private List<Integer> num;
  private String name;

  @Value("${person.age}")
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
