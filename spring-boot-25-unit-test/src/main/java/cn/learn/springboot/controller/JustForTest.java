package cn.learn.springboot.controller;

/**
 * @author shaoyijiong
 * @date 2021/7/7
 */
public class JustForTest {

  public Object a1(String name) {
    if (name != null) {
      if ("a".equals(name)) {
        return "hello";
      } else if ("b".equals(name)) {
        return "world";
      }
    } else {
      return "";
    }
    return null;
  }
}
