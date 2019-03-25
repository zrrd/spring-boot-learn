package cn.learn.springboot.base.filter;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 测试自定义过滤器.
 *
 * @author 邵益炯
 * @date 2018/9/25
 */
@RestController
public class TestFilterController {

  @RequestMapping("/testFilter")
  public String testFilter(String param) {
    System.out.println(param);
    return "hello world";
  }
}
