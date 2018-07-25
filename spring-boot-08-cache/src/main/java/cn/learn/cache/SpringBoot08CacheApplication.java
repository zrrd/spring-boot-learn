package cn.learn.cache;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@MapperScan("cn.learn.cache.mapper")
@SpringBootApplication
public class SpringBoot08CacheApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBoot08CacheApplication.class, args);
  }
}
