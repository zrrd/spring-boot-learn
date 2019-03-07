package cn.learn.springboot.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

/**
 * 自己定义的切面
 *
 * @author shaoyijiong
 * @date 2019/3/7
 */
@Component
@Aspect
public class MyAspect {

  /**
   * <pre>
   * arg() @arg() 指定参数
   * ---
   * execution() 执行方法
   * 用来匹配方法签名，方法签名使用全限定名，
   * 包括访问修饰符（public/private/protected）、返回类型，
   * 包名、类名、方法名、参数，其中返回类型，包名，类名，方法，参数是必须的
   * 例子如下 : 可以用统配符提高灵活性
   * execution(public String cn.learn.springboot.aop.UserServiceImpl.print(String))
   * execution(*  cn.learn.springboot.aop.UserServiceImpl.*(..))
   * ---
   * target   this()指定对象  这个类有实现接口时用target 没有实现接口时用this
   * target(cn.learn.springboot.aop.UserServiceImpl)
   * ---
   * within()  匹配指定类型
   * 例子如下 : 匹配某个包下面所有类的方法（包括子包下面的所有类方法） ..
   * within(cn.learn.springboot.aop..*)
   * ---
   * | @within()
   * 这个指示器，指定匹配必须包括某个注解的的类里的所有连接点
   * ---
   * | @target
   * 这个指示器匹配指定连接点，这个连接点所属的目标对象的类有一个指定的注解
   * ---
   * | @args
   * 这个指示符是用来匹配连接点的参数的，@args指出连接点在运行时传过来的参数的类必须要有指定的注解，
   * 假设我们希望切入所有在运行时接受实@Entity注解的bean对象的方法
   * ---
   * | @annotation
   * 这个指示器匹配那些有指定注解的连接点，比如，我们可以新建一个这样的注解@Loggable
   * ---
   * 多个连接用 && 符号 与 || 符号相连
   * </pre>
   */

  @Pointcut("execution(*  cn.learn.springboot.aop.UserServiceImpl.print(..))")
  public void pointCut() {

  }

  /**
   * 通过JoinPoint获得方法的一系列属性
   */
  @Before("pointCut() && args(user)")
  public void before(JoinPoint joinPoint, String user) {
    Object[] args = joinPoint.getArgs();
    System.out.println(args.length);
    if (user == null) {
      System.out.println("user 不能为空");
    }
    System.out.println("before..");
  }

  @After("pointCut()")
  public void after() {
    System.out.println("after..");
  }

  @AfterReturning("pointCut()")
  public void afterReturning() {
    System.out.println("afterReturning..");
  }

  @AfterThrowing("pointCut()")
  public void afterThrowing() {
    System.out.println("afterThrowing..");
  }

  @Around("pointCut()")
  public Object around(ProceedingJoinPoint pjp) throws Throwable {
    System.out.println("around before ..");
    Object proceed = pjp.proceed();
    System.out.println("around after ..");
    return proceed;
  }
}
