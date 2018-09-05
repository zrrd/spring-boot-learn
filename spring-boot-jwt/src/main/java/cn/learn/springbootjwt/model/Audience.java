package cn.learn.springbootjwt.model;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * .
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Component
@Data
@ConfigurationProperties(prefix = "audience")
public class Audience {

  private String clientId;
  private String base64Secret;
  private String name;
  private int expiresSecond;
}
