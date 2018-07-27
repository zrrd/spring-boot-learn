package cn.learn.springbootjwt;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @author shaoyijiong
 * @date 2018/7/27
 */
@Data
@Component
@ConfigurationProperties(prefix = "audiemce")
public class Audience {
  private String clientId;
  private String base64Secret;
  private String name;
  private int expiresSecond;
}
