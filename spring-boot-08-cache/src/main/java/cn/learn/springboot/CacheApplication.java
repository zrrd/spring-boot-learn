package cn.learn.springboot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * .
 *
 * @author shaoyijiong
 */
@MapperScan("cn.learn.cache.mapper")
@SpringBootApplication
public class CacheApplication {

  public static void main(String[] args) {
    SpringApplication.run(CacheApplication.class, args);
  }
}
