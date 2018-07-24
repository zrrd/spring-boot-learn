package cn.learn.cache;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

/**
 * EnableCaching开启基于注解的缓存.
 */
@MapperScan(value = "cn.learn.cache.mapper")
@SpringBootApplication
@EnableCaching
public class SpringBoot07CacheApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBoot07CacheApplication.class, args);
  }
}
