package cn.learn.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author shaoyijiong
 * @date 2019/3/18
 */
@Controller
public class HelloController {

  @RequestMapping("hello")
  public String hello() {
    return "/hello.html";
  }
}
