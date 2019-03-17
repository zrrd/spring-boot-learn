package cn.learn.springboot.arrayrequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 测试数组请求
 *
 * @author shaoyijiong
 * @date 2019/3/11
 */
@RestController
public class Test2Controller {


  /**
   * <pre>
   *  这样写list的size为6
   *   aList[0].name    a
   *   aList[0].age     1
   *   aList[1].name    b
   *   aList[2].name    c
   *   aList[5].name    d
   *   el               aaaa
   * </pre>
   */
  @PostMapping("array")
  public String test(ArrayReq req) {
    System.out.println(req);
    return "成功";
  }
}
