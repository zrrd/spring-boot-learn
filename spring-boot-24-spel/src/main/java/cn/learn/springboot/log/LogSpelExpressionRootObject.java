package cn.learn.springboot.log;

import java.lang.reflect.Method;
import lombok.Data;

/**
 * SpEL 解析的根节点
 *
 * @author shaoyijiong
 * @date 2021/2/26
 */
@Data
public class LogSpelExpressionRootObject {

  private final Method method;
  private final Object[] args;
  private final Object target;
  private final Class<?> targetClass;

  /**
   * 构造root
   */
  public LogSpelExpressionRootObject(Method method, Object[] args, Object target, Class<?> targetClass) {
    this.method = method;
    this.args = args;
    this.target = target;
    this.targetClass = targetClass;
  }


}
