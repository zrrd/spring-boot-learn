package cn.learn.springboot.interceptor;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

/**
 * 创建代理对象
 *
 * @author shaoyijiong
 * @date 2019/3/6
 */
public class ProxyBean implements InvocationHandler {

  private Object target;
  private Interceptor interceptor;

  public static Object getProxyBean(Object target, Interceptor interceptor) {
    ProxyBean proxyBean = new ProxyBean();
    proxyBean.interceptor = interceptor;
    proxyBean.target = target;
    //生成一个代理对象
    Object proxy = Proxy
        .newProxyInstance(target.getClass().getClassLoader(),
            target.getClass().getInterfaces(), proxyBean);

    return proxy;
  }

  @Override
  public Object invoke(Object proxy, Method method, Object[] args) {
    boolean exceptionFlag = false;
    //定义为当前方法
    Invocation invocation = new Invocation(target, method, args);
    Object retObj = null;
    try {
      if (interceptor.useAround()) {
        retObj = this.interceptor.around(invocation);
      } else {
        retObj = method.invoke(target, args);
      }
    } catch (Exception e) {
      //产生异常
      exceptionFlag = true;
    }
    this.interceptor.after();
    if (exceptionFlag) {
      interceptor.afterThrowing();
    } else {
      interceptor.afterReturning();
      return retObj;
    }
    return null;
  }
}
