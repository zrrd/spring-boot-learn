package cn.learn.springboot.log;

import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.aop.support.AopUtils;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.expression.EvaluationContext;
import org.springframework.stereotype.Component;

/**
 * @author shaoyijiong
 * @date 2021/3/2
 */
@Component
@Aspect
@Setter
@Slf4j
public class LogAspect {


  private volatile LogOperationExpressionEvaluator expressionEvaluator;

  private BeanFactory beanFactory;

  /**
   * 环绕切面
   */
  @Around("@annotation(operationLog)")
  public Object around(ProceedingJoinPoint pjp, OperationLog operationLog) throws Throwable {
    Object proceed = null;
    try {
      proceed = pjp.proceed();
    } finally {
      log(pjp, operationLog, proceed);
    }
    return proceed;
  }


  private void init() {
    if (expressionEvaluator == null) {
      expressionEvaluator = new LogOperationExpressionEvaluator();
    }
  }

  private void log(ProceedingJoinPoint pjp, OperationLog operationLog, Object proceed) {
    try {
      // 保存日志
      init();
      MethodSignature signature = (MethodSignature) pjp.getSignature();
      // 判断是是否式aop 获取实际方法
      Method targetMethod = !Proxy.isProxyClass(pjp.getTarget().getClass())
          ? AopUtils.getMostSpecificMethod(signature.getMethod(), pjp.getTarget().getClass()) : signature.getMethod();
      EvaluationContext context = expressionEvaluator
          .createEvaluationContext(signature.getMethod(), pjp.getArgs(), pjp.getTarget(), pjp.getTarget().getClass(),
              targetMethod, proceed, beanFactory);
      log.info(expressionEvaluator.getLogMessage(operationLog.value(), context));
    } catch (Exception e) {
      // 日志记录不影响记录
      log.error("log record parse exception", e);
    }
  }


}
