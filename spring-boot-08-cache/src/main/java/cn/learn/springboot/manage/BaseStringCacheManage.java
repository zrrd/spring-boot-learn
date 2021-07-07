package cn.learn.springboot.manage;

import java.util.concurrent.Callable;
import org.springframework.cache.support.AbstractValueAdaptingCache;

/**
 * @author shaoyijiong
 * @date 2021/6/21
 */
public class BaseStringCacheManage extends AbstractValueAdaptingCache {

  /**
   * Create an {@code AbstractValueAdaptingCache} with the given setting.
   *
   * @param allowNullValues whether to allow for {@code null} values
   */
  protected BaseStringCacheManage(boolean allowNullValues) {
    super(allowNullValues);
  }

  @Override
  protected Object lookup(Object key) {
    return null;
  }

  @Override
  public String getName() {
    return null;
  }

  @Override
  public Object getNativeCache() {
    return null;
  }

  @Override
  public <T> T get(Object key, Callable<T> valueLoader) {
    return null;
  }

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
