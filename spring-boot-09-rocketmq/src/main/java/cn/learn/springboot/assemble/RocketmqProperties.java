package cn.learn.springboot.assemble;

import java.util.ArrayList;
import java.util.List;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * RocketMq配置类.
 *
 * @author 邵益炯
 * @date 2018/8/24
 */
@Data
@ConfigurationProperties(prefix = "rocketmq")
public class RocketmqProperties {

  public static final String PREFIX = "rocketmq";
  private String namesrvAddr;
  private String producerGroupName;
  private String transactionProducerGroupName;
  private String consumerGroupName;
  private String producerInstanceName;
  private String consumerInstanceName;
  private String producerTranInstanceName;
  private int consumerBatchMaxSize;
  private boolean consumerBroadcasting;
  private boolean enableHisConsumer;
  private boolean enableOrderConsumer;
  private boolean vipChannelEnabled;
  private List<String> subscribe = new ArrayList<>();
}
