package cn.learn.springboottips.handlerInterceptor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 测试自定义的拦截器.
 *
 * @author 邵益炯
 * @date 2018/9/25
 */
@RestController
public class TestHandler {

  @RequestMapping("/testHandler")
  public String testHandler() {
    return "hello world";
  }
}
