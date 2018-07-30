package cn.learn.springboot07.listener;

import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Component;

/**
 * SpringBoot启动配置.
 *
 * @author shaoyijiong
 * @date 2018/7/24
 */
@Component
public class HelloApplicationContextInitializer implements
    ApplicationContextInitializer<ConfigurableApplicationContext> {


  /**
   * IOC监听容器的启动.
   *
   * @param configurableApplicationContext IOC容器
   */
  @Override
  public void initialize(ConfigurableApplicationContext configurableApplicationContext) {
    System.out
        .println("ConfigurableApplicationContext Initializer" + configurableApplicationContext);
  }
}
