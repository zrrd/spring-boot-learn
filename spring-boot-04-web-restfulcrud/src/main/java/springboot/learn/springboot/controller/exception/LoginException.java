package springboot.learn.springboot.controller.exception;

import springboot.learn.springboot.base.BaseException;

/**
 * 登录异常.
 *
 * @author shaoyijiong
 * @date 2018/7/19
 */
public class LoginException extends BaseException {

  /**
   * 无参构造,错误信息和错误码.
   */
  public LoginException() {
    super("用户名或者密码错误");
    this.code = 10000;
  }
}
