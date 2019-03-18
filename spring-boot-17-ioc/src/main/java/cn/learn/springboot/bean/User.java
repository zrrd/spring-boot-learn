package cn.learn.springboot.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author shaoyijiong
 * @date 2019/3/6
 */
@Data
@AllArgsConstructor
public class User {

  private String username;
  private String password;
  private Integer age;
}
