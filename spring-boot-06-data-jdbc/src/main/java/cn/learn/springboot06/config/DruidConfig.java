package cn.learn.springboot06.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import javax.sql.DataSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * druid数据源.
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
@Configuration
public class DruidConfig {

  @ConfigurationProperties(prefix = "spring.datasource")
  @Bean
  public DataSource druid() {
    return new DruidDataSource();
  }

  /**
   * 配置Druid监控. 1.配置一个管理后台的servlet
   */
  @Bean
  public ServletRegistrationBean servletRegistrationBean() {
    ServletRegistrationBean bean = new ServletRegistrationBean(
        new StatViewServlet(), "/druid/*");
    Map<String, String> initParams = new HashMap<>();
    initParams.put("loginUsername", "admin");
    initParams.put("loginPassword", "123456");
    initParams.put("allow", "");
    bean.setInitParameters(initParams);
    return bean;
  }

  /**
   * 2.配置一个web监控filter.
   */
  @Bean
  public FilterRegistrationBean filterRegistrationBean() {
    FilterRegistrationBean bean = new FilterRegistrationBean();
    Map<String, String> initParams = new HashMap<>();
    bean.setFilter(new WebStatFilter());
    bean.setInitParameters(initParams);
    bean.setUrlPatterns(Collections.singletonList("/*"));
    return bean;
  }
}
