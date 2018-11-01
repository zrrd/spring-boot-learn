package cn.learn.springboot.listener;

import org.springframework.boot.SpringApplicationRunListener;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.stereotype.Component;

/**
 * SpringBoot启动配置.
 *
 * @author shaoyijiong
 * @date 2018/7/24
 */
@Component
public class HelloSpringApplicationRunListener implements SpringApplicationRunListener {

  @Override
  public void starting() {
    System.out.println("SpringApplicationRunListener ... starting...");
  }

  @Override
  public void environmentPrepared(ConfigurableEnvironment configurableEnvironment) {
    Object os = configurableEnvironment.getSystemEnvironment().get("os.name");
    System.out.println("SpringApplicationRunListener ... environmentPrepared..." + os);
  }

  @Override
  public void contextPrepared(ConfigurableApplicationContext configurableApplicationContext) {
    System.out.println("SpringApplicationRunListener ... contextPrepared...");
  }

  @Override
  public void contextLoaded(ConfigurableApplicationContext configurableApplicationContext) {
    System.out.println("SpringApplicationRunListener ... contextLoaded...");
  }

  @Override
  public void started(ConfigurableApplicationContext context) {

  }

  @Override
  public void running(ConfigurableApplicationContext context) {

  }

  @Override
  public void failed(ConfigurableApplicationContext context, Throwable exception) {

  }

}
