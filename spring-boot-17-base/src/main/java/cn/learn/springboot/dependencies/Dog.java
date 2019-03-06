package cn.learn.springboot.dependencies;

import org.springframework.stereotype.Component;

/**
 * @author shaoyijiong
 * @date 2019/3/6
 */
@Component
public class Dog implements Animal {

  @Override
  public void play() {
    System.out.println("旺旺");
  }
}
