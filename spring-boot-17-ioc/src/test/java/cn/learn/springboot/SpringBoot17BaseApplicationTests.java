package cn.learn.springboot;

import cn.learn.springboot.bean.Cat;
import cn.learn.springboot.bean.User;
import cn.learn.springboot.dependencies.CutePeople;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.core.ResolvableType;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBoot17BaseApplicationTests {

  @Autowired
  private ApplicationContext applicationContext;

  @Test
  public void contextLoads() {
  }

  @Test
  public void iocTest() {
    //bean 是否存在
    applicationContext.containsBean("user");
    applicationContext.containsBeanDefinition("user");

    //从spring容器中拿到bean 不过不存在 直接抛异常
    Object user = applicationContext.getBean("user");
    User bean = applicationContext.getBean(User.class);
    User user1 = applicationContext.getBean("user", User.class);

    //是否为单例
    applicationContext.isSingleton("user");
    applicationContext.isPrototype("user");

    //是否匹配类型
    applicationContext.isTypeMatch("user", User.class);
    applicationContext.isTypeMatch("user", ResolvableType.forClass(User.class));

    //获取bean的类型
    Class<?> user2 = applicationContext.getType("user");

    //获取bean的别名
    String[] users = applicationContext.getAliases("user");
  }

  @Test
  public void testCat() {
    Cat catcat = applicationContext.getBean("catcat", Cat.class);
  }

  @Autowired
  private CutePeople people;

  @Test
  public void testA() {
    people.playWithAnimal();
  }
}
