package cn.learn.springboot;

import com.xxl.job.core.executor.impl.XxlJobSpringExecutor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author shaoyijiong
 * @date 2020/9/1
 */
@Slf4j
@Configuration
public class XxlJobConfig {

  @Value("${xxl.job.admin.addresses}")
  private String adminAddresses;

  @Value("${xxl.job.executor.appname}")
  private String appname;

  /**
   * config
   */
  @Bean
  public XxlJobSpringExecutor xxlJobExecutor() {
    log.info(">>>>>>>>>>> xxl-job config init.");
    XxlJobSpringExecutor xxlJobSpringExecutor = new XxlJobSpringExecutor();
    xxlJobSpringExecutor.setAdminAddresses(adminAddresses);
    xxlJobSpringExecutor.setAppname(appname);
    return xxlJobSpringExecutor;

    // XxlJobSpringExecutor xxlJobSpringExecutor = new XxlJobSpringExecutor();
    // xxlJob 控制台地址
    // xxlJobSpringExecutor.setAdminAddresses(adminAddresses);
    // xxlJobSpringExecutor.setAppname(appname);
    // xxlJobSpringExecutor.setAddress(address);
    // xxlJobSpringExecutor.setIp(ip);
    // xxlJobSpringExecutor.setPort(port);
    // xxlJobSpringExecutor.setAccessToken(accessToken);
    // xxlJobSpringExecutor.setLogPath(logPath);
    // xxlJobSpringExecutor.setLogRetentionDays(logRetentionDays);

    /**
     * 针对多网卡、容器内部署等情况，可借助 "spring-cloud-commons" 提供的 "InetUtils" 组件灵活定制注册IP；
     *
     *      1、引入依赖：
     *          <dependency>
     *             <groupId>org.springframework.cloud</groupId>
     *             <artifactId>spring-cloud-commons</artifactId>
     *             <version>${version}</version>
     *         </dependency>
     *
     *      2、配置文件，或者容器启动变量
     *          spring.cloud.inetutils.preferred-networks: 'xxx.xxx.xxx.'
     *
     *      3、获取IP
     *          String ip_ = inetUtils.findFirstNonLoopbackHostInfo().getIpAddress();
     */
  }
}
