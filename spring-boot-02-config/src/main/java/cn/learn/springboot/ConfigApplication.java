package cn.learn.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * .
 *
 * @author shaoyijong
 */
@SpringBootApplication
//@Import            导入其他类的配置
//@ImportResource    导入xml配置
//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})  通过这样排除自动配置
public class ConfigApplication {

  public static void main(String[] args) {
    SpringApplication.run(ConfigApplication.class, args);
  }
}
