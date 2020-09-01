package cn.learn.springboot.dependencies;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * @author shaoyijiong
 * @date 2019/3/6
 */
@Component
public class CutePeople implements People, BeanNameAware, BeanFactoryAware,
    ApplicationContextAware, InitializingBean, DisposableBean {

  /**
   * 如果Spring 容器中有两个相同的话 就会报错 解决方法 将Animal 的名字改成dog或者rabbit 在 dog 或者 rabbit 上添加@Primary注解 优先 通过@Qualifier指定名字 消除歧义
   */
  @Qualifier("dog")
  @Autowired
  private Animal animal;

  @Override
  public void playWithAnimal() {
    animal.play();
  }

  @Override
  public void setAnimal(Animal animal) {
    this.animal = animal;
  }

  //bean 的生命周期

  /**
   * 继承于BeanNameAware
   */
  @Override
  public void setBeanName(String name) {
    System.out.println("得到bean的名字" + name);
  }

  @Override
  public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
    System.out.println("得到bean的factory" + beanFactory.toString());
  }

  @Override
  public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
    System.out.println("得到applicationContext" + applicationContext.toString());
  }

  @Override
  public void afterPropertiesSet() {
    System.out.println("得到afterPropertiesSet");
  }

  @Override
  public void destroy() {
    System.out.println("得到DisposableBean");
  }

  @PostConstruct
  public void postConstruct() {
    System.out.println("自定义初始化方法");
  }

  @PreDestroy
  public void preDestroy() {
    System.out.println("自定义销毁方法");
  }
}
