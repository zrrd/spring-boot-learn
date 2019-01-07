package springboot.learn.controller;

import java.util.Date;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author shaoyijiong
 * @date 2019/1/7
 */
@Controller
public class HelloController {

  @GetMapping("show1")
  public String show1(Model model) {
    model.addAttribute("msg", "Hello, Thymeleaf!");
    return "hello";
  }

  @GetMapping("show2")
  public String show2(Model model) {
    User user = new User();
    user.setAge(21);
    user.setName("Jack Chen");
    user.setFriend(new User("李小龙", 30));

    model.addAttribute("user", user);
    return "show2";
  }

  @GetMapping("show3")
  public String show3(Model model) {
    model.addAttribute("today", new Date());
    return "show3";
  }
}
