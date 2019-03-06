package cn.learn.springboot.condition;

import org.springframework.context.annotation.Condition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.env.Environment;
import org.springframework.core.type.AnnotatedTypeMetadata;

/**
 * 判断是否可用
 *
 * @author shaoyijiong
 * @date 2019/3/6
 */
public class DataBaseConditional implements Condition {

  /**
   * 数据库装配条件
   *
   * @param context 条件上下文
   * @param metadata 注释类型的元数据
   * @return true 装配bean 否则不装配
   */
  @Override
  public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
    Environment environment = context.getEnvironment();
    return environment.containsProperty("database.driverName")
        && environment.containsProperty("database.url")
        && environment.containsProperty("database.username")
        && environment.containsProperty("database.password");
  }
}