package cn.learn.springboot.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * token配置.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Data
@ConfigurationProperties(prefix = "audience")
public class Audience {

  private String clientId;
  private String base64Secret;
  private String name;
  private int expiresSecond;

  public Audience(String clientId, String base64Secret, String name, int expiresSecond) {
    this.clientId = clientId;
    this.base64Secret = base64Secret;
    this.name = name;
    this.expiresSecond = expiresSecond;
  }
}
