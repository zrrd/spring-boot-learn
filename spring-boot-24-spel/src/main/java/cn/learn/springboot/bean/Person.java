package cn.learn.springboot.bean;

import lombok.Data;

/**
 * 人
 *
 * @author shaoyijiong
 * @date 2021/2/23
 */
@Data
public class Person {

  /**
   * 姓名
   */
  private String name = "hello";
  /**
   * 年龄
   */
  private Integer age = 12;

}
