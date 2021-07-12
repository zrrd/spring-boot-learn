package cn.learn.springboot.config;


import cn.learn.springboot.errors.GlobalExceptionHandler;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 自动配置 , 引入common包就自动启用 , 可以手动不启用
 *
 * @author shaoyijiong
 * @date 2020/6/29
 */
@Configuration
public class CommonsAutoConfiguration {

  /**
   * 自动配置 ExceptionHandler
   */
  @Bean
  @ConditionalOnProperty(value = "center-common.enable-exception-handler", havingValue = "true", matchIfMissing = true)
  @ConditionalOnWebApplication
  public GlobalExceptionHandler globalExceptionHandler() {
    return new GlobalExceptionHandler();
  }

}
