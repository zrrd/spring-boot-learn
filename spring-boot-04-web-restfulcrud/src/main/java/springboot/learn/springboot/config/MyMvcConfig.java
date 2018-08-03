package springboot.learn.springboot.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 使用WebMvcConfigurer可以来扩展SpringMVC的功能.
 *
 * @author shaoyijiong
 * @date 2018/7/11
 */
@Configuration
public class MyMvcConfig implements WebMvcConfigurer {

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/hi").setViewName("success");
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    //将自己的登陆拦截器放进来
        /*registry.addInterceptor(new LoginHandlerInterceptor()).addPathPatterns("/**")
                    .excludePathPatterns("/login", "/", "index.html", "/user/login");*/
  }
}
