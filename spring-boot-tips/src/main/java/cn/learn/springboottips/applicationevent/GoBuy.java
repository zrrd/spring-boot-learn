package cn.learn.springboottips.applicationevent;

import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

/**
 * 监听商场减价,去商场买. 监听消息,做相应处理
 *
 * @author 邵益炯
 * @date 2018/8/27
 */
@Component
public class GoBuy {

  /**
   * 消息条件,要WalMart商场减价与减价幅度大于0.5才去买. 通过Async使事件通过异步方式调用
   *
   * @param saleEvent 监听的消息
   */
  @Async
  @EventListener(condition = "#saleEvent.mail == 'WalMart' and #saleEvent.off > 0.5")
  public void buy(SaleEvent saleEvent) {
    System.out.println(saleEvent.getMail() + "商场减价了" + saleEvent.getOff() + "快去买啊");
  }
}
