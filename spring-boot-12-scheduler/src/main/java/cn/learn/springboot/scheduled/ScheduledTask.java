package cn.learn.springboot.scheduled;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 定时任务学习.
 *
 * @author shaoyijiong
 * @since 2018/7/2
 */
@Component
public class ScheduledTask {


  /**
   * 任务1 *：表示匹配该域的任意值. cron 秒0-59 分0-59 小时0-23 日期1-31 月份1-12 星期1-7
   */
  @Scheduled(cron = "1 * * * * *")
  public void task1() {
    System.out.println("task1");
  }

  /**
   * 第一次10秒后执行，当执行完后2秒再执行.
   * */
  @Scheduled(initialDelay = 10000, fixedDelay = 2000)
  public void task2() {
    System.out.println("task2");
  }

  /**
   * 每100秒执行一次.
   * */
  @Scheduled(fixedRate = 100000)
  public void timerRate() {
    System.out.println("我是:timerRate");
  }
}
