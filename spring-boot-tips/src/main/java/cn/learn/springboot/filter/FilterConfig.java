package cn.learn.springboot.filter;

import javax.servlet.Filter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 推荐使用拦截器   过滤器能做到的拦截器都能做到  但是有些过滤器做不到.
 *
 * @author 邵益炯
 * @date 2018/9/25
 */
@Configuration
public class FilterConfig {

  /**
   * 配置一个Filter注册器.  先执行filter2 在执行 filter1
   */
  @Bean
  public FilterRegistrationBean filterRegistrationBean1() {
    FilterRegistrationBean<Filter> registrationBean = new FilterRegistrationBean<>();
    registrationBean.setFilter(filter1());
    registrationBean.setName("filter1");
    //设置顺序
    registrationBean.setOrder(10);
    return registrationBean;
  }

  /**
   * 配置一个Filter注册器.
   */
  @Bean
  public FilterRegistrationBean filterRegistrationBean2() {
    FilterRegistrationBean<Filter> registrationBean = new FilterRegistrationBean<>();
    registrationBean.setFilter(filter2());
    registrationBean.setName("filter2");
    //设置顺序
    registrationBean.setOrder(3);
    return registrationBean;
  }

  @Bean
  public Filter filter1() {
    return new MyFilter();
  }

  @Bean
  public Filter filter2() {
    return new MyFilter2();
  }
}


