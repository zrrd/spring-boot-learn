package cn.learn.springbootjwt.model;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * 用户.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Data
@AllArgsConstructor
public class User {

  private String id;
  private String username;
  private String password;
  private String name;
}
