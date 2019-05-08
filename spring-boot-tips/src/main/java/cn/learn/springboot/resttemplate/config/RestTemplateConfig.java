package cn.learn.springboot.resttemplate.config;

import java.time.Duration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/**
 * RestTemplate.
 *
 * @author shaoyijiong
 * @date 2018/7/26
 */
@Configuration
public class RestTemplateConfig {

  @Autowired
  private RestTemplateBuilder builder;

  @Bean
  public RestTemplate restTemplate() {
    return builder.setReadTimeout(Duration.ofSeconds(3)).setConnectTimeout(Duration.ofSeconds(3)).build();
  }

}
