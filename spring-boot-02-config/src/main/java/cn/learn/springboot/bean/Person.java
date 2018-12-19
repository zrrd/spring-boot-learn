package cn.learn.springboot.bean;

import java.util.Date;
import java.util.List;
import java.util.Map;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 配置测试 将配置中的属性通过ConfigurationProperties 映射到类中去.
 *
 * @author shaoyijiong
 * @since 2018/7/2
 */
@Data
@Component
@ConfigurationProperties(prefix = "person")
public class Person {

  private String lastName;
  //@Value("#{11*2}")
  private Integer age;
  //@Value("true")
  private Boolean boss;
  private Date birth;
  private Map<String, Object> maps;
  private List<Object> lists;
  private Dog dog;

  @Data
  public static class Dog {

    private String name;
    private Integer age;
  }

  @Value("${server.port}")
  private String port;
}
