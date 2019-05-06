package cn.learn.springboot.base.scheduled;

import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

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
  //@Scheduled(cron = "1 * * * * *")
  public void task1() {
    System.out.println("task1");
  }

  /**
   * 第一次10秒后执行，当执行完后2秒再执行. 执行完再执行下一步
   */
  //@Scheduled(initialDelay = 10000, fixedDelay = 2000)
  public void task2() {
    System.out.println("task2");
  }

  /**
   * 每100秒执行一次. 不管有没有执行完
   */
  //@Scheduled(fixedRate = 100000)
  public void timerRate() {
    System.out.println("我是:timerRate");
  }


  private static final String[] a = new String[]{"1", "2"};
  private static final AtomicInteger i = new AtomicInteger(1);

  //@Scheduled(fixedRate = 1000)
  public void errorScheduled() {
    System.out.println("线程执行" + i.getAndAdd(1));
    System.out.println(a[3]);
  }


  RestTemplate restTemplate = new RestTemplate();

  @Scheduled(fixedRate = 1000, initialDelay = 6000)
  public void errorHttpScheduled() {
    restTemplate.getForObject("http://192.168.0.154:8080", String.class);
    System.out.println("线程执行" + i.getAndAdd(1));
  }
}
