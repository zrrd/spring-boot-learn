package cn.learn.springboot.interceptor;

/**
 * @author shaoyijiong
 * @date 2019/3/6
 */
public class TestMyService {

  public static void main(String[] args) {
    HelloService helloService = new HelloServiceImpl();
    HelloService proxyBean = (HelloService) ProxyBean
        .getProxyBean(helloService, new MyInterceptor());
    proxyBean.sayHello(null);
  }
}
