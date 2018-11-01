package cn.learn.springboot.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 注册拦截器.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Configuration
@EnableConfigurationProperties(Audience.class)
public class MyMvcConfig implements WebMvcConfigurer {

  private final Audience audience;

  public MyMvcConfig(Audience audience) {
    this.audience = audience;
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    //不拦截 登录请求
    registry.addInterceptor(new TokenHandlerInterceptor(audience))
        .excludePathPatterns("/jwt/login");
  }
}
