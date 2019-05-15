package cn.learn.springboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * @author shaoyijiong
 * @date 2019/5/14
 */
@RestController
public class HelloWorldController {

  @GetMapping("helloWorld")
  public Mono<String> helloWorld() {
    return Mono.just("hello world");
  }
}
