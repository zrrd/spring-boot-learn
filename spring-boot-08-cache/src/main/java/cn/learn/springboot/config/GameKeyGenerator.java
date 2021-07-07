package cn.learn.springboot.config;

import java.lang.reflect.Method;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.stereotype.Component;

/**
 * @author shaoyijiong
 * @date 2021/7/7
 */
@Component
public class GameKeyGenerator implements KeyGenerator {

  /**
   * @return 返回的对应的key
   * @see GameCache#get(Object)
   */
  @Override
  public Object generate(Object target, Method method, Object... params) {
    return params[0];
  }
}
