package cn.learn.springboot;

import cn.learn.springboot.task.Task;
import java.util.concurrent.Future;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.StopWatch;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AsyncTests {

  @Autowired
  Task task;

  /**
   *
   */
  @Test
  public void testTask() throws InterruptedException {

    StopWatch stopWatch = new StopWatch();
    stopWatch.start();
    Future<String> task1 = task.doTaskOne();
    Future<String> task2 = task.doTaskTwo();
    Future<String> task3 = task.doTaskThree();
    while (true) {
      if (task1.isDone() && task2.isDone() && task3.isDone()) {
        //三个任务全部完成,退出任务
        break;
      }
    }
    stopWatch.stop();
    System.out.println("总耗时: " + stopWatch.getTotalTimeMillis());
  }

  @Test
  public void contextLoads() {
  }

}
