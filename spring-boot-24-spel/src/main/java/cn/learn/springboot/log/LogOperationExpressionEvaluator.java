package cn.learn.springboot.log;

import java.lang.reflect.Method;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.expression.BeanFactoryResolver;
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
   * Indicate that there is no result variable.
   */
  public static final Object NO_RESULT = new Object();

  /**
   * Indicate that the result variable cannot be used at all.
   */
  public static final Object RESULT_UNAVAILABLE = new Object();

  /**
   * The name of the variable holding the result object.
   */
  public static final String RESULT_VARIABLE = "result";

  private final SpelExpressionParser parser = new SpelExpressionParser();


  private final ParameterNameDiscoverer parameterNameDiscoverer = new DefaultParameterNameDiscoverer();

  /**
   * 生成 SpEL 上下文
   */
  public EvaluationContext createEvaluationContext(Method method, Object[] args, Object target, Class<?> targetClass,
      Method targetMethod, @Nullable Object result, @Nullable BeanFactory beanFactory) {
    LogSpelExpressionRootObject rootObject = new LogSpelExpressionRootObject(method, args, target, targetClass);
    LogEvaluationContext evaluationContext =
        new LogEvaluationContext(rootObject, targetMethod, args, parameterNameDiscoverer);
    if (result == RESULT_UNAVAILABLE) {
      evaluationContext.addUnavailableVariable(RESULT_VARIABLE);
    } else if (result != NO_RESULT) {
      evaluationContext.setVariable(RESULT_VARIABLE, result);
    }
    if (beanFactory != null) {
      evaluationContext.setBeanResolver(new BeanFactoryResolver(beanFactory));
    }
    return evaluationContext;
  }


  private static final Pattern PATTERN = Pattern.compile("\\{.*?}");

  /**
   * 获得拼装后的日志信息
   *
   * @param expression 具体表达式 你好啊{#p.name},年龄{#p.age},养了一只{#c.category}的猫
   * @param context SpEL 上下文
   */
  public String getLogMessage(String expression, EvaluationContext context) {
    if (expression.contains("{")) {
      Matcher matcher = PATTERN.matcher(expression);
      while (matcher.find()) {
        // {#p.name}
        String group = matcher.group();
        // 去掉{ } => #p.name
        String replace = group.replace("{", "").replace("}", "");
        String value =
            Optional.ofNullable(parser.parseExpression(replace).getValue(context)).map(Objects::toString).orElse("");
        expression = expression.replace(group, value);
      }
    }
    return expression;
  }

}
