package springboot.learn.springboot01helloworld.cotroller;

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

  @RequestMapping(path = "/hello")
  public String helloWorld() {
    return "HelloWorld";
  }
}
