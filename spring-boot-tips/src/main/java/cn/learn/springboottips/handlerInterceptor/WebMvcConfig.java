package cn.learn.springboottips.handlerInterceptor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 拦截器配置.
 *
 * @author 邵益炯
 * @date 2018/9/25
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(handlerInterceptor())
        //配置拦截规则
        .addPathPatterns("/**");
    /*
    多个拦截器一起用
    registry.addInterceptor(handlerInterceptor2()).addPathPatterns("/**");
    */
  }

  @Bean
  public HandlerInterceptor handlerInterceptor() {
    return new MyInterceptor();
  }
}
