package cn.learn.springboot.validation.myvalidation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * 用来校验的类
 *
 * @author shaoyijiong
 * @date 2018/7/5
 */
public class CannotHaveBlankValidator implements ConstraintValidator<CannotHaveBlank, String> {

  @Override
  public void initialize(CannotHaveBlank constraintAnnotation) {

  }

  @Override
  public boolean isValid(String value, ConstraintValidatorContext context) {
    System.out.println("进入判断了");
    String block = " ";
    if (value == null) {
      context.buildConstraintViolationWithTemplate("不能为空").addConstraintViolation();
      return false;
    }
    if (value.contains(block)) {
      //获取默认提示信息
      String defaultConstraintMessageTemplate = context.getDefaultConstraintMessageTemplate();
      System.out.println("default message :" + defaultConstraintMessageTemplate);
      //禁用默认提示信息
      context.disableDefaultConstraintViolation();
      //设置提示语
      context.buildConstraintViolationWithTemplate("不能有空格").addConstraintViolation();
      return false;
    }
    return true;
  }
}
