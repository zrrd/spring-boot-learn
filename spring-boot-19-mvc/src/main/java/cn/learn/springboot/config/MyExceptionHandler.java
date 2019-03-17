package cn.learn.springboot.config;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.validation.ConstraintViolationException;
import javax.validation.ValidationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * 异常拦截器
 *
 * @author shaoyijiong
 * @date 2018/12/4
 */
@Slf4j
//指定拦截的包
@ControllerAdvice(basePackages = "cn.learn.springboot.controller", annotations = Controller.class)
public class MyExceptionHandler {

  //异常拦截

  /**
   * 自定义异常处理
   */
  @ResponseStatus(HttpStatus.OK)
  @ResponseBody
  @ExceptionHandler(MyException.class)
  public Map handleException(MyException e) {
    log.error("业务错误", e);
    return errorJson(500, e.getMessage());
  }

  /**
   * 参数错误
   */
  @ResponseStatus(HttpStatus.OK)
  @ResponseBody
  @ExceptionHandler(value = {ValidationException.class, BindException.class})
  public Map handleException(Exception e) {
    String message;
    log.error("参数错误", e);
    if (e instanceof BindException) {
      BindException bindException = (BindException) e;
      BindingResult bindingResult = bindException.getBindingResult();
      message = bindingResult.getAllErrors().get(0).getDefaultMessage();
    } else if (e instanceof ConstraintViolationException) {
      ConstraintViolationException violationException = (ConstraintViolationException) e;
      message = violationException.getConstraintViolations().iterator().next().getMessageTemplate();
    } else {
      message = e.getMessage();
    }
    return errorJson(400, message);
  }

  /**
   * 服务器异常
   *
   * @param e 自定义的异常全部通过这个处理器处理
   * @return 自定义的异常信息, json格式 返回消息类型是正常状态
   */
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  @ExceptionHandler(RuntimeException.class)
  public Map handleException(RuntimeException e) {
    log.error("服务器错误", e);
    return errorJson(500, e.getMessage());
  }

  private Map errorJson(Integer code, String message) {
    Map<String, Object> resp = new HashMap<>(3);
    resp.put("status", code);
    resp.put("message", message);
    resp.put("timestamp", System.currentTimeMillis());
    return resp;
  }

  /**
   * 绑定格式话,参数转换规则 增加验证器
   */
  @InitBinder
  public void initBinder(WebDataBinder binder) {
    //自定义日期编辑器 且不能为空
    CustomDateEditor dateEditor = new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"), false);
    binder.registerCustomEditor(Date.class, dateEditor);
  }

  @ModelAttribute
  public void model(Model model) {
    model.addAttribute("a", "a");
  }
}
