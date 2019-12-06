package cn.learn.springboot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author shaoyijiong
 * @date 2019/12/6
 */
@SpringBootApplication
@MapperScan(value = "cn.learn.springboot.mapper")
public class DataMybatisPlusApplication {

  public static void main(String[] args) {
    SpringApplication.run(DataMybatisPlusApplication.class, args);
  }

}
