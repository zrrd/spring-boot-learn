package cn.learn.springboot.validation.myvalidation;

import lombok.Data;

/**
 * 测试自定义校验
 *
 * @author shaoyijiong
 * @date 2018/7/5
 */
@Data
public class TestMyValidation {

  @CannotHaveBlank(message = "不能为空")
  String testBlank;
}
