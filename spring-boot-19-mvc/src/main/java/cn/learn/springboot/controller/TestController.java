package cn.learn.springboot.controller;

import java.util.Date;
import javax.servlet.http.Part;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
   * json 请求 @RequestBody
   */
  @RequestMapping
  public String json(@RequestBody A a) {
    return "";
  }

  /**
   * spring 封装的文件上传
   */
  @RequestMapping("file1")
  public String file1(MultipartFile file) {
    //文件的原名
    file.getOriginalFilename();
    return file.getName();
  }

  /**
   * servlet  的默认文件上传
   */
  @RequestMapping("file2")
  public String file2(Part file) {
    //文件的原名
    return file.getName();
  }

  /**
   * 接受请求头
   */
  @RequestMapping("header")
  public String header(@RequestHeader("id") Integer id) {
    return id.toString();
  }

  /**
   * 在这边指定状态码
   */
  @ResponseStatus(HttpStatus.CREATED)
  @RequestMapping("code")
  public ResponseEntity<String> code() {
    //ok code = 200
    //return ResponseEntity.ok("");

    //404
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("");
  }
}
