package cn.learn.springboot.interceptor;

import java.lang.reflect.InvocationTargetException;

/**
 * 拦截器接口
 *
 * @author shaoyijiong
 * @date 2019/3/6
 */
public interface Interceptor {

  /**
   * 事前方法
   */
  boolean before();

  /**
   * 事后方法
   */
  void after();

  Object around(Invocation invocation) throws InvocationTargetException, IllegalAccessException;

  /**
   * 事后返回方法 事件没有发生异常执行
   */
  void afterReturning();

  /**
   * 事后异常方法 当事件发生异常后执行
   */
  void afterThrowing();

  /**
   * 是否使用around方法取代原方法
   */
  boolean useAround();
}
