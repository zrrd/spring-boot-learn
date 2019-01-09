package springboot.learn;

import java.util.concurrent.TimeUnit;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import springboot.learn.mp.MqService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBoot16RabbitmqApplicationTests {

  @Autowired
  private MqService mqService;

  @Test
  public void contextLoads() throws InterruptedException {
    mqService.sendMsgCas("hello world", "0001");
    //mqService.sendMsg("hello");
    TimeUnit.SECONDS.sleep(5);
  }

}

