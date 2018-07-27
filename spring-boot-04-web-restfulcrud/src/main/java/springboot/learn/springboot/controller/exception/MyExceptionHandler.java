package springboot.learn.springboot.controller.exception;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import springboot.learn.springboot.base.BaseException;

/**
 * 我的异常处理器.
 *
 * @author shaoyijiong
 * @date 2018/7/19
 */
@ControllerAdvice
public class MyExceptionHandler {

  /**
   * 异常处理器.
   *
   * @param e 自定义的异常全部通过这个处理器处理
   * @return 自定义的异常信息, json格式
   */
  @ResponseBody
  @ExceptionHandler(BaseException.class)
  public Map<String, Object> handleException(BaseException e) {
    Map<String, Object> map = new HashMap<>(2);
    map.put("code", e.getCode());
    map.put("message", e.getMessage());
    return map;
  }
}