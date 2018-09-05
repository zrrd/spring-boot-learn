package cn.learn.springbootjwt.model;

import lombok.Data;

/**
 * 保存校验的token消息.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Data
public class AccessToken {

  /**
   * access_token token字段.
   */
  private String accessToken;
  /**
   * token_type token类型字段.
   */
  private String tokenType;
  /**
   * expires_in token 有效期字段.
   */
  private long expiresIn;
}