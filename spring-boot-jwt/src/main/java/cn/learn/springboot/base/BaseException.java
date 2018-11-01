package cn.learn.springboot.base;

import lombok.Getter;

/**
 * 基本异常.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Getter
public class BaseException extends RuntimeException {

  /**
   * 错误码.
   */
  protected Integer code;

  public BaseException() {
  }

  public BaseException(String message) {
    super(message);
  }

  public BaseException(String message, Throwable cause) {
    super(message, cause);
  }

  public BaseException(Throwable cause) {
    super(cause);
  }

  public BaseException(String message, Throwable cause, boolean enableSuppression,
      boolean writableStackTrace) {
    super(message, cause, enableSuppression, writableStackTrace);
  }

}
