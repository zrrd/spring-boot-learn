package cn.learn.springboottips.restTemplate;

import lombok.Getter;
import lombok.Setter;

/**
 * .
 *
 * @author shaoyijiong
 * @date 2018/7/26
 */
@Getter
@Setter
public class Response<T> {

  private String message;
  private Integer code;
  private T data;

}
