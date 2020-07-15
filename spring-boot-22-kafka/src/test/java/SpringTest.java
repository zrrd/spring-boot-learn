import cn.learn.kafka.SpringBootKafkaApplication;
import cn.learn.kafka.springcloud.KafkaStreamProducer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author shaoyijiong
 * @date 2020/7/9
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = SpringBootKafkaApplication.class)
@ActiveProfiles("dev")
public class SpringTest {

  @Autowired
  private  KafkaStreamProducer kafkaStreamProducer;

  @Test
  public void sendMessage() {
    kafkaStreamProducer.sendMessage();

  }

}
