package cn.learn.springboot.web;

import org.springframework.http.HttpStatus;

/**
 * 相应接口
 */
public interface Response<T> {

  /**
   * 相应码
   *
   * @return 相应码
   */
  default Integer getCode() {
    return HttpStatus.OK.value();
  }

  /**
   * 响应文本
   *
   * @return 文本
   */
  default String getMessage() {
    return HttpStatus.OK.getReasonPhrase();
  }

  /**
   * 响应数据
   *
   * @return 数据
   */
  T getData();
}
