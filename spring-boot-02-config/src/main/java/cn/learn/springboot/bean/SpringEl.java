package cn.learn.springboot.bean;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * spring 的表达式
 *
 * @author shaoyijiong
 * @date 2019/3/18
 */
@Data
@Component
public class SpringEl {

  /**
   * 注入配置属性
   */
  @Value("${person.last-name}")
  private String lastName;

  /**
   * #{}表示使用Spring表达式 T(...)表示引入类 System 是java.long的包 不用全名 其他包的需要全名
   */
  @Value("#{T(System).currentTimeMillis()}")
  private Long initTime;

  /**
   * 引入bean中的其他属性
   */
  @Value("#{springEl.lastName + 'hello'}")
  private String lastName2;

  /**
   * 直接赋予字符串
   */
  @Value("#{'你好'}")
  private String hello;

  /**
   * 使用科学技术法
   */
  @Value("#{9.3E3}")
  private Double doubleValue;

  /**
   * 浮点数
   */
  @Value("#{3.14}")
  private Float floatValue;

  /**
   * 引入bean中的其他属性,?是判断这个属性是否为空 可以直接调用String的方法
   */
  @Value("#{springEl.lastName?.toUpperCase()}")
  private String lastName3;

  /**
   * 表达式中使用各种判断
   */
  @Value("#{springEl.lastName eq 'aa'}")
  private Boolean isEq;
}
