package cn.learn.springboot06datamybatis;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(value = "cn.learn.springboot06datamybatis.mapper")
public class SpringBoot06DataMybatisApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBoot06DataMybatisApplication.class, args);
  }
}
