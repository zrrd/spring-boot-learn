package cn.learn.springboot.interceptor;

/**
 * @author shaoyijiong
 * @date 2019/3/6
 */
public class HelloServiceImpl implements HelloService {

  @Override
  public void sayHello(String name) {
    if (name == null || "".equals(name)) {
      System.out.println("name为空");
    } else {
      System.out.println("hello " + name);
    }
  }
}
