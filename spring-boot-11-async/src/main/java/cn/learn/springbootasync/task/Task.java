package cn.learn.springbootasync.task;

import java.util.Random;
import java.util.concurrent.Future;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Component;

/**
 * 异步调用实现类.
 *
 * @author shaoyijiong
 * @date 2018/7/27
 */
@Component
public class Task {

  private static Random random = new Random();

  /**
   * 通过@Async告诉Spring这是异步的 通过哪个线程池启动
   * 通过 taskExecutor 来启动线程.
   * 返回的是一个Future结果
   */
  @Async("taskExecutor")
  public Future<String> doTaskOne() throws InterruptedException {
    System.out.println("开始做任务一" + Thread.currentThread().getName());

    long start = System.currentTimeMillis();
    Thread.sleep(random.nextInt(10000));
    long end = System.currentTimeMillis();
    System.out.println("完成任务一，耗时：" + (end - start) + "毫秒");

    return new AsyncResult<>("任务一完成");
  }

  /**
   * 异步任务.
   */
  @Async("taskExecutor")
  public Future<String> doTaskTwo() throws InterruptedException {
    System.out.println("开始做任务二" + Thread.currentThread().getName());

    long start = System.currentTimeMillis();
    Thread.sleep(random.nextInt(10000));
    long end = System.currentTimeMillis();
    System.out.println("完成任务二，耗时：" + (end - start) + "毫秒");

    return new AsyncResult<>("任务二完成");
  }

  /**
   * 异步任务.
   */
  @Async("taskExecutor")
  public Future<String> doTaskThree() throws InterruptedException {
    System.out.println("开始做任务三" + Thread.currentThread().getName());

    long start = System.currentTimeMillis();
    Thread.sleep(random.nextInt(10000));
    long end = System.currentTimeMillis();
    System.out.println("完成任务三，耗时：" + (end - start) + "毫秒");

    return new AsyncResult<>("任务三完成");
  }
}
