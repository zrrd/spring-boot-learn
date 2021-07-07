package cn.learn.springboot.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.Cache;
import org.springframework.cache.interceptor.CacheErrorHandler;
import org.springframework.stereotype.Component;

/**
 * 自定义缓存异常处理 打日志不抛出异常 走db
 *
 * @author shaoyijiong
 * @date 2021/6/29
 */
@Slf4j
@Component
public class DefaultCacheErrorHandler implements CacheErrorHandler {

    @Override
    public void handleCacheGetError(RuntimeException exception, Cache cache, Object key) {
        log.error("缓存get异常,cache[{}],key[{}]", cache, key, exception);
    }

    @Override
    public void handleCachePutError(RuntimeException exception, Cache cache, Object key, Object value) {
        log.error("缓存put异常,cache[{}],key[{}],value[{}]", cache, key, value, exception);
    }

    @Override
    public void handleCacheEvictError(RuntimeException exception, Cache cache, Object key) {
        log.error("缓存evict异常,cache[{}],key[{}]", cache, key, exception);
    }

    @Override
    public void handleCacheClearError(RuntimeException exception, Cache cache) {
        log.error("缓存clear异常,cache[{}],key[{}]", cache, exception);
    }
}
