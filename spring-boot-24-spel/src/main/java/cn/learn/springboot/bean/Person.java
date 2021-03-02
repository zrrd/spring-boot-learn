package cn.learn.springboot.bean;

import javax.validation.constraints.Max;
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
  @Max(33)
  private Integer age = 12;

}
