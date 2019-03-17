package cn.learn.springboot.controller;

import java.util.Date;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author shaoyijiong
 * @date 2019/3/13
 */

//@Controller @ResponseBody 这两个注解的合体
@RestController
@RequestMapping("hello")
public class TestController {

  /**
   * 路径参数 /hello/1
   */
  @GetMapping("/{id}")
  public String urlGet(@PathVariable("id") Integer id) {
    return "";
  }

  /**
   * DATE yyyy-MM-dd ,TIME hh:mm:ss.SSSZ,DATE_TIME yyyy-MM-dd hh:mm:ss.SSSZ,NONE;
   * pattern="yyyy-MM-dd"
   */
  @RequestMapping("a")
  public String format(@DateTimeFormat(iso = ISO.DATE) Date date,
      @NumberFormat(pattern = "###,###.###") Double num) {
    return "";
  }

  @Data
  public static class A {

    private String name;
    private Integer age;
  }

  /**
   * json 请求
   */
  @RequestMapping
  public String json(@RequestBody A a) {
    return "";
  }
}
