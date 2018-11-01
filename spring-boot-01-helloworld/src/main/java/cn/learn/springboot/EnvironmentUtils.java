package cn.learn.springboot;

import org.springframework.context.EnvironmentAware;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

/**
 * 获取环境参数工具类.
 *
 * @author shaoyijiong
 * @date 2018/7/24
 */
@Component
public class EnvironmentUtils implements EnvironmentAware {

  private Environment environment;

  @Override
  public void setEnvironment(Environment environment) {
    this.environment = environment;
  }

  /**
   * 获得当前环境profile
   *
   * @return 当前环境 profile
   */
  public String getProfile() {
    System.out.println(environment);
    String[] activeProfiles = environment.getActiveProfiles();
    if (activeProfiles != null && activeProfiles.length > 0) {
      return activeProfiles[0];
    }
    return "";
  }


}
