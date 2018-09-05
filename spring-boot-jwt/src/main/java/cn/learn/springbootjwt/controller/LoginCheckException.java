package cn.learn.springbootjwt.controller;

import cn.learn.springbootjwt.base.BaseException;

/**
 * 登陆校验异常.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
public class LoginCheckException extends BaseException {
  /**
   * 无参构造,错误信息和错误码.
   */
  public LoginCheckException() {
    super("用户未登陆");
    this.code = 401;
  }
}
