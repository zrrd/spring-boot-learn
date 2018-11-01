package cn.learn.springboot.applicationevent;

import javax.annotation.Resource;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 测试事件的发布.
 *
 * @author 邵益炯
 * @date 2018/8/27
 */
@RestController
public class EventTest {

  /**
   * 事件发布器.
   */
  @Resource
  private ApplicationEventPublisher publisher;

  /**
   * 测试.
   */
  @GetMapping(value = "/eventTest")
  public String eventTest(String mail,Double off) {
    //发布事件
    publisher.publishEvent(new SaleEvent(mail, off));
    return "发布事件成功";
  }
}
