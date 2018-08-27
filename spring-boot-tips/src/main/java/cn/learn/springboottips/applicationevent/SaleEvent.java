package cn.learn.springboottips.applicationevent;

import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;

/**
 * 商场减价消息.
 * 设计模式:
 *
 * @author 邵益炯
 * @date 2018/8/27
 */
@Getter
@Setter
public class SaleEvent extends ApplicationEvent {

  /**
   * 减价商场.
   */
  String mail;
  /**
   * 减价折扣.
   */
  Double off;

  public SaleEvent(String mail, Double off) {
    super(mail + off);
    this.mail = mail;
    this.off = off;
  }
}
