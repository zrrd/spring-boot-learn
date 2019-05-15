package cn.learn.springboot.exception;

/**
 * @author shaoyijiong
 * @date 2019/5/14
 */
public class ResourceNotFoundException extends RuntimeException {

  public ResourceNotFoundException() {
    super("用户未找到");
  }
}
