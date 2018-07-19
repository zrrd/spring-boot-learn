package springboot.learn.springboot.config;

import org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties.Embedded;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import springboot.learn.springboot.compent.LoginHandlerInterceptor;

/**
 * SpringMvc额外配置.
 *
 * @author shaoyijiong
 * @date 2018/7/11
 */
@Configuration
public class MyMvcConfig extends WebMvcConfigurerAdapter {

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/hi").setViewName("success");
  }

  @Bean
  public WebMvcConfigurerAdapter webMvcConfigurerAdapter() {
    WebMvcConfigurerAdapter adapter = new WebMvcConfigurerAdapter() {
      @Override
      public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("login");
        registry.addViewController("/index.html").setViewName("login");
      }

      //拦截器注册  未登录用户禁止
      @Override
      public void addInterceptors(InterceptorRegistry registry) {
        //将自己的登陆拦截器放进来
        /*registry.addInterceptor(new LoginHandlerInterceptor()).addPathPatterns("/**")
                    .excludePathPatterns("/login", "/", "index.html", "/user/login");*/
      }
    };
    return adapter;
  }


  @Bean
  public EmbeddedServletContainerCustomizer embeddedServletContainerCustomizer() {
    return new EmbeddedServletContainerCustomizer() {

      //定制嵌入式servlet容器相关规则
      @Override
      public void customize(
          ConfigurableEmbeddedServletContainer container) {
        container.setPort(8083);
      }
    };
  }
}
