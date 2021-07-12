package cn.learn.springboot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author shaoyijiong
 * @date 2021/2/23
 */
@MapperScan("cn.learn.springboot.mapper")
@SpringBootApplication
public class UnitTestApplication {

  public static void main(String[] args) {
    SpringApplication.run(UnitTestApplication.class, args);
  }

}
