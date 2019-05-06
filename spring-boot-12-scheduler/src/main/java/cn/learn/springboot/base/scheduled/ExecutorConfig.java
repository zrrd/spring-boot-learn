package cn.learn.springboot.base.scheduled;

import com.google.common.util.concurrent.ThreadFactoryBuilder;
import java.util.Optional;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.ThreadFactory;
import javax.annotation.Nullable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;

/**
 * @author shaoyijiong
 */
@Configuration
public class ExecutorConfig implements SchedulingConfigurer {

  @Override
  public void configureTasks(@Nullable ScheduledTaskRegistrar taskRegistrar) {
    Optional.ofNullable(taskRegistrar).ifPresent(a -> a.setScheduler(taskExecutor()));
  }

  /**
   * 定时任务的线程
   */
  @Bean(destroyMethod = "shutdown")
  public ExecutorService taskExecutor() {
    //为定时任务取名方便确认
    ThreadFactory nameThreadFactory = new ThreadFactoryBuilder().setNameFormat("scheduledPool-%d")
        .build();
    return new ScheduledThreadPoolExecutor(10, nameThreadFactory);
  }
}
