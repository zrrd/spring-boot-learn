package cn.learn.springboot.errors;

import cn.learn.springboot.web.CommonResponse;
import java.util.Optional;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 全局异常处理.
 *
 * @author shaoyijiong
 * @date 2018/8/14
 */
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

  /**
   * 异常处理器.
   *
   * @param e 自定义的异常全部通过这个处理器处理
   * @return 自定义的异常信息, json格式
   */
  @ResponseBody
  @ExceptionHandler(Exception.class)
  public CommonResponse<Void> handleException(Exception e) {
    log.error("", e);
    if (e instanceof ServiceException) {
      // 自定义的业务逻辑异常
      ServiceException baseException = (ServiceException) e;
      return CommonResponse.fail(baseException.getCode(), baseException.getMessage());
    } else if (e instanceof BindException) {
      // 参数校验异常
      BindException bindException = (BindException) e;
      return CommonResponse.fail(bindException.getAllErrors().get(0).getDefaultMessage());
    } else if (e instanceof IllegalArgumentException) {
      // 断言异常
      return CommonResponse.fail(e.getMessage());
    } else if (e instanceof ConstraintViolationException) {
      // 参数校验异常
      ConstraintViolationException cve = (ConstraintViolationException) e;
      ConstraintViolation<?> next = cve.getConstraintViolations().iterator().next();
      return CommonResponse.fail(next.getMessage());
    } else if (e instanceof MethodArgumentNotValidException) {
      // 参数校验异常
      MethodArgumentNotValidException ex = ((MethodArgumentNotValidException) e);
      BindingResult result = ex.getBindingResult();
      return CommonResponse
          .fail(Optional.ofNullable(result.getFieldError()).map(FieldError::getDefaultMessage).orElse("参数不正确!"));
    } else if (e.getCause() != null && e.getCause() instanceof ServiceException) {
      ServiceException baseException = (ServiceException) e.getCause();
      return CommonResponse.fail(baseException.getCode(), baseException.getMessage());
    } else if (e instanceof HttpMessageNotReadableException) {
      return CommonResponse.fail(HttpStatus.BAD_REQUEST.value(), "参数格式错误", e);
    } else {
      //系统内部异常
      return CommonResponse.fail(HttpStatus.INTERNAL_SERVER_ERROR.value(), "系统异常!", e);
    }
  }
}
