package cn.learn.springbootjwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@ServletComponentScan(basePackages = "cn.learn.springbootjwt.typeshandlers")
@SpringBootApplication
public class SpringBootJwtApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBootJwtApplication.class, args);
  }
}
