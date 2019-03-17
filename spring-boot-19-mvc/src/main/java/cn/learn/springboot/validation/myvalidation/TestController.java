package cn.learn.springboot.validation.myvalidation;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 测试Controller
 *
 * @author shaoyijiong
 * @date 2018/7/5
 */
@RestController
public class TestController {

  private static ValidatorFactory factory = Validation.buildDefaultValidatorFactory();

  @RequestMapping("/test")
  public String test(TestMyValidation testMyValidation) {
    Validator validator = factory.getValidator();
    validator.validate(testMyValidation);
    return testMyValidation.getTestBlank();
  }

  static boolean boolValue;

  public static void main(String[] args) {
    boolValue =  true;
    if (boolValue) {
      System.out.println("hello java");
    }

    if (boolValue == true) {
      System.out.println("hello jvm");
    }
  }
}
