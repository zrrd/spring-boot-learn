package cn.learn.springboot.interceptor;

import java.lang.reflect.InvocationTargetException;

/**
 * 自定义拦截器
 *
 * @author shaoyijiong
 * @date 2019/3/6
 */
public class MyInterceptor implements Interceptor {

  @Override
  public boolean before() {
    System.out.println("before");
    return true;
  }

  @Override
  public void after() {
    System.out.println("after");
  }

  @Override
  public Object around(Invocation invocation)
      throws InvocationTargetException, IllegalAccessException {
    System.out.println("around");
    Object proceed = invocation.proceed();
    return proceed;
  }

  @Override
  public void afterReturning() {
    System.out.println("afterReturning");
  }

  @Override
  public void afterThrowing() {
    System.out.println("afterThrowing");
  }

  @Override
  public boolean useAround() {
    return true;
  }
}
