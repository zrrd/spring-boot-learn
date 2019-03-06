package cn.learn.springboot.config;

import cn.learn.springboot.bean.Cat;
import cn.learn.springboot.bean.User;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.Profile;

/**
 * <pre>
 * ComponentScan 如果不指定路径的话 默认只扫描该类所在的包与子包 ComponentScan 的相关配置
 * basePackage value 定义扫描的包 可以定义 * 通用符
 * excludeFilters 当满足过滤器的时候不扫描
 * includeFilters 当满足过滤器的时候扫描
 * lazyInit 是否延迟加载 使用时才初始化
 * </pre>
 *
 * @author shaoyijiong
 * @date 2019/3/6
 */

//@ComponentScan(basePackages = "cn.learn.springboot.bean", value = "cn.learn.springboot.bean",
//    basePackageClasses = Cat.class,
//    excludeFilters = {@Filter(classes = User.class, type = FilterType.CUSTOM)},
//    includeFilters = {@Filter(classes = User.class, type = FilterType.CUSTOM)},
//    lazyInit = true)
@Configuration
public class AppConfig {

  /**
   * 如果没有 @Bena("user") Spring 容器中的默认名字为方法的名字 也可以用 @Bean({"user1","user"}) 指定多个名称
   * 根据环境觉得是否装配@Profile
   */
  @Profile("dev")
  @Bean("user")
  @ConditionalOnMissingClass("user")
  public User user1() {
    return new User("a", "b", 1);
  }

  /**
   * 如果有一个同名的话会忽略这个注入 而不是报错
   */
  @Bean("user1")
  public User user2() {
    return new User("c", "b", 1);
  }
}
