package cn.learn.springboot.errors;

import lombok.Getter;
import org.springframework.http.HttpStatus;

/**
 * 基础错误类.
 *
 * @author shaoyijiong
 * @date 2018/7/19
 */
@Getter
public class ServiceException extends RuntimeException {

  /**
   * 错误码
   * <br>
   * <li>500 - 业务异常
   * <li>401 - 未认证
   * <li>403 - 无权访问资源
   */
  protected Integer code = HttpStatus.INTERNAL_SERVER_ERROR.value();

  public ServiceException() {

  }

  public ServiceException(String message) {
    super(message);
  }

  public ServiceException(Integer code, String message) {
    super(message);
    this.code = code;
  }

  public ServiceException(String message, Throwable cause) {
    super(message, cause);
  }

  public ServiceException(Integer code, String message, Throwable cause) {
    super(message, cause);
    this.code = code;
  }


  public ServiceException(Throwable cause) {
    super(cause);
  }

  public ServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
    super(message, cause, enableSuppression, writableStackTrace);
  }
}
