package cn.learn.springboot.bean;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * @author shaoyijiong
 * @date 2019/3/6
 */
@Component("catcat")
// 定义bean的生命周期为原型 singleton 单例 prototype 原型
// session http会话 application web工程生命周期 request 单次请求
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class Cat {

  /**
   * 注入固定的值
   */
  @Value("hh")
  private String name;
  @Value("1")
  private Integer age;

}
