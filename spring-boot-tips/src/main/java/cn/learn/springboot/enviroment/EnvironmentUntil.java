package cn.learn.springboot.enviroment;

import org.springframework.context.EnvironmentAware;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

/**
 * 环境工具类.
 *
 * @author shaoyijiong
 * @date 2018/7/26
 */
@Component
public class EnvironmentUntil implements EnvironmentAware {

  private Environment environment;

  private EnvironmentUntil() {
  }

  public String getProfile() {
    String[] profiles = environment.getActiveProfiles();
    if (profiles.length > 0) {
      return profiles[0];
    }
    return "";
  }

  @Override
  public void setEnvironment(Environment environment) {
    this.environment = environment;
  }
}
