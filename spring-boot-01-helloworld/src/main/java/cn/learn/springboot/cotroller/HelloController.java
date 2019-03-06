package cn.learn.springboot.cotroller;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HelloWorld
 *
 * @author shaoyijiong
 * @since 2018/6/28
 */
@RestController
public class HelloController {

  @Autowired
  BeanFactory beanFactory;


  @RequestMapping(path = "form")
  public String form() {
    return "访问成功";
  }
}
