package cn.learn.springboot.log;

import java.lang.reflect.Method;
import org.springframework.context.expression.MethodBasedEvaluationContext;
import org.springframework.core.ParameterNameDiscoverer;

/**
 * 解析方法上下文
 *
 * @author shaoyijiong
 * @date 2021/2/26
 */
public class LogEvaluationContext extends MethodBasedEvaluationContext {
  
  public LogEvaluationContext(Object rootObject, Method method, Object[] arguments,
      ParameterNameDiscoverer parameterNameDiscoverer) {
    super(rootObject, method, arguments, parameterNameDiscoverer);
  }

}
