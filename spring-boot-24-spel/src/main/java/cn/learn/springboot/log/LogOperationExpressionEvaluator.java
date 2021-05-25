package cn.learn.springboot.log;

import java.lang.reflect.Method;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.expression.BeanFactoryResolver;
import org.springframework.context.expression.MethodBasedEvaluationContext;
import org.springframework.core.DefaultParameterNameDiscoverer;
import org.springframework.core.ParameterNameDiscoverer;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.lang.Nullable;

/**
 * @author shaoyijiong
 * @date 2021/2/26
 */
public class LogOperationExpressionEvaluator {

  /**
   * The name of the variable holding the result object.
   */
  public static final String RESULT_VARIABLE = "result";

  private final SpelExpressionParser parser = new SpelExpressionParser();

  /**
   * 模板表达式
   */
  private final TemplateParserContext templateParserContext = new TemplateParserContext();

  private final ParameterNameDiscoverer parameterNameDiscoverer = new DefaultParameterNameDiscoverer();

  /**
   * 生成 SpEL 上下文
   */
  public EvaluationContext createEvaluationContext(Method method, Object[] args, Object target, Class<?> targetClass,
      Method targetMethod, @Nullable Object result, @Nullable BeanFactory beanFactory) {
    LogSpelExpressionRootObject rootObject = new LogSpelExpressionRootObject(method, args, target, targetClass);
    MethodBasedEvaluationContext evaluationContext =
        new MethodBasedEvaluationContext(rootObject, targetMethod, args, parameterNameDiscoverer);
    evaluationContext.setVariable(RESULT_VARIABLE, result);
    if (beanFactory != null) {
      evaluationContext.setBeanResolver(new BeanFactoryResolver(beanFactory));
    }
    return evaluationContext;
  }

  /**
   * 获得拼装后的日志信息
   *
   * @param expression 具体表达式 你好啊#{#p.name},年龄#{#p.age},养了一只#{#c.category}的猫
   * @param context SpEL 上下文
   */
  public String getLogMessage(String expression, EvaluationContext context) {
    String method = parser.parseExpression("method.toString()").getValue(context, String.class);
    String targetClass = parser.parseExpression("targetClass.toString()").getValue(context, String.class);
    return parser.parseExpression(expression, templateParserContext).getValue(context, String.class);
  }

}
