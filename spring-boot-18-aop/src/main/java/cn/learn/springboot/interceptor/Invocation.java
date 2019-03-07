package cn.learn.springboot.interceptor;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * 回调 代指那个方法
 *
 * @author shaoyijiong
 * @date 2019/3/6
 */
public class Invocation {

  private Object[] params;
  private Method method;
  private Object target;

  public Invocation(Object target, Method method, Object[] params) {
    this.params = params;
    this.method = method;
    this.target = target;
  }

  public Object proceed() throws InvocationTargetException, IllegalAccessException {
    return method.invoke(target, params);
  }
}
