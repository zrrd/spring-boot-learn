package cn.learn.springboot.controller;

import cn.learn.springboot.bean.Cat;
import cn.learn.springboot.bean.Person;
import cn.learn.springboot.log.OperationLog;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author shaoyijiong
 * @date 2021/3/2
 */
@RestController
public class TestController {

  @RequestMapping("hello")
  //@OperationLog("你好啊{#p.name},年龄{#p.age},养了一只{#c.category}的猫 {#result.name}的人")
  @OperationLog("你好啊")
  public Person hello(@Validated Person p, Cat c) {
    //if (p.getAge() > 10) {
    //  throw new IllegalArgumentException("大于10");
    //}
    return new Person();
  }
}
