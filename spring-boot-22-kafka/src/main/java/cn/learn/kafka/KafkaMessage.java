package cn.learn.kafka;

import java.time.LocalDateTime;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @author shaoyijiong
 * @date 2020/7/9
 */
@Data
@Accessors(chain = true)
public class KafkaMessage {

  public static final String TOPIC = "HELLO_KAFKA";

  private Integer id;
  private String name;
  private LocalDateTime localDateTime;
}
