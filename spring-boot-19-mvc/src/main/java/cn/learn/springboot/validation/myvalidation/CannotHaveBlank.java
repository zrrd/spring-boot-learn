package cn.learn.springboot.validation.myvalidation;


import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;


/**
 * 不能有空格的校验
 *
 * @ Constraint 通过 Constraint自定义校验注解
 */

@Target({ElementType.FIELD, ElementType.METHOD, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = {CannotHaveBlankValidator.class})
public @interface CannotHaveBlank {

  //默认错误消息
  String message() default "不能包含空格";

  //分组
  Class<?>[] groups() default {};

  //负载
  Class<? extends Payload>[] payload() default {};

}
