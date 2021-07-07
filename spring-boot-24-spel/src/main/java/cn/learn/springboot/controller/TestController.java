package cn.learn.springboot.controller;

import cn.learn.springboot.bean.Cat;
import cn.learn.springboot.bean.Person;
import cn.learn.springboot.log.OperationLog;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author shaoyijiong
 * @date 2021/3/2
 */
@RestController
public class TestController {

  @RequestMapping("test")
  @OperationLog("姓名为#{#person.name},年龄#{#person.age},养了一只#{#cat.category}的猫 卖给了 #{#result.name}的人")
  //@OperationLog("姓名为#{#a0.name},年龄#{#a0.age},养了一只#{#a1.category}的猫 卖给了#{#result.name}的人")
  //@OperationLog("姓名为#{#p0.name},年龄#{#p0.age},养了一只#{#p1.category}的猫 卖给了#{#result.name}的人")
  public Person test(Person person, Cat cat) {
    Person p = new Person();
    p.setName("小明");
    return p;
  }

  @RequestMapping("test1")
  //@OperationLog("姓名为#{#person.name},年龄#{#person.age},养了一只#{#cat.category}的猫 卖给了 #{#result.name}的人")
  //@OperationLog("姓名为#{#a0.name},年龄#{#a0.age},养了一只#{#a1.category}的猫 卖给了#{#result.name}的人")
  @OperationLog("姓名为#{#p0.name},年龄#{#p0.age},养了一只#{#p1.category}的猫 卖给了#{#result?.name}的人")
  public void test1(Person person, Cat cat) {
  }
}
