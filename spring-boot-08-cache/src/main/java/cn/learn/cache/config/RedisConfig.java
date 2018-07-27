package cn.learn.cache.config;

import cn.learn.cache.bean.Game;
import java.net.UnknownHostException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;

/**
 * redis的config.
 *
 * @author shaoyijiong
 * @date 2018/7/27
 */
@Configuration
public class RedisConfig {

  /**
   * 通过json的方式来序列化对象,redis默认是jdk序列化.
   * Primay默认的缓存管理器
   */
  @Primary
  @Bean
  public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) throws UnknownHostException {
    RedisTemplate<Object, Object> template = new RedisTemplate();
    template.setConnectionFactory(redisConnectionFactory);
    template.setDefaultSerializer(new Jackson2JsonRedisSerializer<>(Object.class));
    return template;
  }

  /**
   * 通过缓存管理器手动存.
   */
  @Bean
  public RedisCacheManager redisCacheManager(RedisTemplate<Object, Object> redisTemplate) {
    RedisCacheManager redisCacheManager = new RedisCacheManager(redisTemplate);

    //key的前缀
    //设置前缀 默认将CacheName作为前缀
    redisCacheManager.setUsePrefix(true);
    return redisCacheManager;

  }
}
