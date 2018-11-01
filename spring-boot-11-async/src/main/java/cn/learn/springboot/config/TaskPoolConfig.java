package cn.learn.springboot.config;

import com.google.common.util.concurrent.ThreadFactoryBuilder;
import java.util.concurrent.Executor;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 通过线程池的方式,管理异步.
 *
 * @author shaoyijiong
 * @date 2018/7/27
 */
@Configuration
public class TaskPoolConfig {

  /**
   * 通过该线程池来管理异步调用的方法执行.
   */
  @Bean("taskExecutor")
  public Executor taskExecutor() {
    ThreadFactory threadFactory = new ThreadFactoryBuilder().setNameFormat("pool-%d").build();
    //自定义线程池
    return new ThreadPoolExecutor(5, 200, 0L,
        TimeUnit.MILLISECONDS,
        new LinkedBlockingDeque<>(1024), threadFactory);
  }
}
