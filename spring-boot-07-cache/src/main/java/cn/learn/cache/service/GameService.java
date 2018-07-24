package cn.learn.cache.service;

import cn.learn.cache.bean.Game;
import cn.learn.cache.mapper.GameMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

/**
 * 游戏service.
 *
 * @author shaoyijiong
 * @date 2018/7/24
 */
@Service
public class GameService {

  @Autowired
  GameMapper gameMapper;

  /**
   * 将方法结果进行缓存,获得相同的数据从缓存中取出.
   * value/cacheName 缓存名 每一个缓存都有名字 可以是一个数组
   * key 缓存数据使用的key,默认值是方法参数的值,也可以用el表达式,具体上网查
   * cacheMange 指定缓存管理器 redis 还是其他什么的
   * condition 指定符合条件的才缓存
   * unless 符合条件不缓存
   */
  @Cacheable(value = "gameCache",condition = "#id>0",unless = "#result==null")
  public Game selectById(Integer id) {
    System.out.println("查询" + id);
    return gameMapper.getGameById(id);
  }
}
