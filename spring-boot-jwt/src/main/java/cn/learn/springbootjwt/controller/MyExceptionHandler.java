package cn.learn.springbootjwt.controller;

import cn.learn.springbootjwt.base.BaseException;
import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 全局异常处理器.
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
  @ExceptionHandler
  public Map<String, Object> handleException(BaseException e) {
    Map<String, Object> map = new HashMap<>(2);
    map.put("code", e.getCode());
    map.put("message", e.getMessage());
    return map;
  }
}