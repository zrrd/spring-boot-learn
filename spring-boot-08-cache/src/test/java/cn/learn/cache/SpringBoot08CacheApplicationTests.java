package cn.learn.cache;

import cn.learn.cache.bean.Game;
import cn.learn.cache.mapper.GameMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBoot08CacheApplicationTests {

  @Autowired
  GameMapper gameMapper;

  @Autowired
  RedisTemplate redisTemplate;

  @Autowired
  StringRedisTemplate stringRedisTemplate;

  /**
   * Redis常见的五种数据类型 String(字符串),List(列表),Set(集合),Hash(散列),ZSet(有序集合) 通过以下方式来操作各个类型
   * stringRedisTemplate.opsForValue() stringRedisTemplate.opsForList()
   * stringRedisTemplate.opsForSet() stringRedisTemplate.opsForHash()
   * stringRedisTemplate.opsForZSet()
   */
  @Test
  public void test01() {
    stringRedisTemplate.opsForValue().append("01", "张三");
  }

  /**
   * 测试保存对象
   */
  @Test
  public void test02() {
    Game game = gameMapper.getGameById(1);
    //保存对象实现了序列化,序列化的值保存到redis 默认通过jdk序列化方式
    //redisTemplate.opsForValue().set("game01", game);
    //以json的方式保存到redis
    //1.将数据转换为json 再保存
    //2.修改redis的默认序列化规则
    redisTemplate.opsForValue().set("jsonGame01", game);
  }

  @Test
  public void contextLoads() {
  }

}
