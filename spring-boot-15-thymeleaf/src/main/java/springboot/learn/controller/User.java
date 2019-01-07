package springboot.learn.controller;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author shaoyijiong
 * @date 2019/1/7
 */
@Data
@NoArgsConstructor
public class User {

  String name;
  int age;
  /**
   * 对象类型属性
   */
  User friend;

  public User(String name, int age) {
    this.name = name;
    this.age = age;
  }
}
