package cn.learn.springboot.bean;

import lombok.Getter;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

/**
 * 用户实体类. @Alias 指定别名
 *
 * @author win
 * @date 2018-6-30
 */
@Getter
@Setter
@Alias("user")
public class User {

  private Integer id;
  private String name;
  private Integer gameNum;
  private Double money;
  private String prefer;

}