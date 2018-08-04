package cn.learn.springboot14security.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * 功夫.
 *
 * @author shaoyijiong
 * @date 2018/8/4
 */
@Controller
public class KongFuController {

  @GetMapping("/")
  public String welcome() {
    return "welcome";
  }
}
