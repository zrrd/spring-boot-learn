package cn.learn.springboot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * .
 * @author shaoyijiong
 */
@SpringBootApplication
@MapperScan(value = "cn.learn.springboot.mapper")
public class DataMybatisApplication {

  public static void main(String[] args) {
    SpringApplication.run(DataMybatisApplication.class, args);
  }
}
