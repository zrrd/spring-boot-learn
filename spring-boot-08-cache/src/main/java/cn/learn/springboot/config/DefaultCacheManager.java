package cn.learn.springboot.config;

import java.util.Collection;
import java.util.Collections;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Component;

/**
 * 自定义 cache manager
 *
 * @author shaoyijiong
 * @date 2021/7/7
 */
@Component
public class DefaultCacheManager implements CacheManager {

  private final GameCache gameCache = new GameCache();

  /**
   * 通过对应的 cache name 找到对应的 cache
   *
   * @param name 对应 @Cacheable 的 cacheNames
   * @return 对应的 cache 操作类
   */
  @Override
  public Cache getCache(String name) {
    if ("game".equals(name)) {
      return gameCache;
    }
    throw new UnsupportedOperationException();
  }

  @Override
  public Collection<String> getCacheNames() {
    return Collections.singleton(gameCache.getName());
  }
}
