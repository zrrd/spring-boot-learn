package cn.learn.springboot.log;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author shaoyijiong
 * @date 2021/3/2
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface OperationLog {

  /**
   * 日志值 支持 SpEL 表达式
   */
  String value();
}
