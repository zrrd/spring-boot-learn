package cn.learn.springboot.arrayrequest;

import java.util.List;
import lombok.Data;

/**
 * @author shaoyijiong
 * @date 2019/3/11
 */
@Data
public class ArrayReq {

  @Data
  public static class A {

    private String name;
    private Integer age;
  }

  private List<A> aList;

  private String el;
}
