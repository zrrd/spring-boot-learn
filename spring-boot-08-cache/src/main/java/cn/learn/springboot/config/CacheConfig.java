package cn.learn.springboot.config;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.interceptor.CacheErrorHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheManager;

/**
 * 用于控制全局@Cacheable的缓存方式
 *
 * @author shaoyijiong
 * @date 2021/6/25
 */
@EnableCaching
@Configuration
public class CacheConfig extends CachingConfigurerSupport {


  /**
   * redis 默认的cache manager实现 也可以使用自己的cache manager实现
   * @see DefaultCacheManager
   */
  private final RedisCacheManager redisCacheManager;
  private final DefaultCacheErrorHandler defaultCacheErrorHandler;

  public CacheConfig(RedisCacheManager redisCacheManager, DefaultCacheErrorHandler defaultCacheErrorHandler) {
    this.redisCacheManager = redisCacheManager;
    this.defaultCacheErrorHandler = defaultCacheErrorHandler;
  }

  @Override
  public CacheManager cacheManager() {
    return redisCacheManager;
  }

  @Override
  public CacheErrorHandler errorHandler() {
    return defaultCacheErrorHandler;
  }
}
