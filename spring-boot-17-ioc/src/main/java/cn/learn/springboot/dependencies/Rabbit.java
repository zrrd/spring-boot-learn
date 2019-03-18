package cn.learn.springboot.dependencies;

import org.springframework.stereotype.Component;

/**
 * @author shaoyijiong
 * @date 2019/3/6
 */
@Component
public class Rabbit implements Animal {

  @Override
  public void play() {
    System.out.println("hh");
  }
}
