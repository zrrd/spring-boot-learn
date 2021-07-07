package cn.learn.springboot.config;

import java.util.concurrent.Callable;
import org.springframework.cache.Cache;

/**
 * @author shaoyijiong
 * @date 2021/7/7
 */
public class GameCache implements Cache {


  @Override
  public String getName() {
    return "game";
  }

  @Override
  public Object getNativeCache() {
    return null;
  }

  /**
   * ValueWrapper 对应的cache返回 为空回去查询数据库
   *
   * @param key 通过 keyGenerator 或者@Cacheable key 获得的对应key
   * @return 从cache获取的值
   */
  @Override
  public ValueWrapper get(Object key) {
    return null;
  }

  @Override
  public <T> T get(Object key, Class<T> type) {
    return null;
  }

  @Override
  public <T> T get(Object key, Callable<T> valueLoader) {
    return null;
  }

  /**
   * 从数据库查询后的处理
   *
   * @param key 通过 keyGenerator 或者@Cacheable key 获得的对应key
   * @param value 从数据库查询后的值 一般用来塞缓存
   */
  @Override
  public void put(Object key, Object value) {

  }

  @Override
  public void evict(Object key) {

  }

  @Override
  public void clear() {

  }
}
