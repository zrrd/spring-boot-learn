package cn.learn.springboot.log;

import java.lang.reflect.Method;
import java.util.HashSet;
import java.util.Set;
import org.springframework.context.expression.MethodBasedEvaluationContext;
import org.springframework.core.ParameterNameDiscoverer;
import org.springframework.expression.EvaluationException;
import org.springframework.lang.Nullable;

/**
 * 解析上下文
 *
 * @author shaoyijiong
 * @date 2021/2/26
 */
public class LogEvaluationContext extends MethodBasedEvaluationContext {

  /**
   * 不可访问变量集合 主要用于判断是否有结果响应
   */
  private final Set<String> unavailableVariables = new HashSet<>(1);


  public LogEvaluationContext(Object rootObject, Method method, Object[] arguments,
      ParameterNameDiscoverer parameterNameDiscoverer) {
    super(rootObject, method, arguments, parameterNameDiscoverer);
  }




  public void addUnavailableVariable(String name) {
    this.unavailableVariables.add(name);
  }

  /**
   * Load the param information only when needed.
   */
  @Override
  @Nullable
  public Object lookupVariable(String name) {
    if (this.unavailableVariables.contains(name)) {
      throw new EvaluationException(name);
    }
    return super.lookupVariable(name);
  }
}
