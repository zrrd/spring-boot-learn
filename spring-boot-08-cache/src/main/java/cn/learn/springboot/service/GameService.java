package cn.learn.springboot.service;

import cn.learn.springboot.bean.Game;
import cn.learn.springboot.mapper.GameMapper;
import javax.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;

/**
 * gameService.
 *
 * @author shaoyijiong
 * @date 2018/7/25
 */

//类缓存的公共配置
//整个类的配置 下面的cacheNames = "game" 都不用写了
//@CacheConfig(cacheNames = "game")
@Slf4j
@Service
public class GameService {

  @Resource
  GameMapper gameMapper;
  //@Resource
  //CacheManager cacheManager;

  /**
   * 将方法结果进行缓存,获得相同的数据从缓存中取出. value/cacheName 缓存名 每一个缓存都有名字 可以是一个数组 key
   * 缓存数据使用的key,默认值是方法参数的值,也可以用el表达式,具体上网查
   * cacheMange 指定缓存管理器 redis 还是其他什么的 condition 指定符合条件的才缓存 unless 符合条件不缓存
   * ##key默认是方法参数.
   */

  @Cacheable(cacheNames = "game")
  public Game selectById(Integer id) {
    log.info("查询" + id + "号游戏");
    return gameMapper.getGameById(id);
  }

  /**
   * '@CachePut:既调用方法,又更新缓存数据 修改数据库某个知道时候更新缓存. 先调用方法,再放到缓存 存到缓存 key:传入的参数,value返回的对象
   */
  @CachePut(cacheNames = "game", key = "#{game.id}")
  public Game updadeGame(Game game) {
    log.info("更新员工" + game);
    gameMapper.updateGame(game);
    return game;
  }

  /**
   * '@CacheEvict:删除缓存.
   */
  @CacheEvict(cacheNames = "game")
  public void deleteGame(Integer id) {
    log.info("删除游戏" + id);
    gameMapper.deleteGameById(id);
  }

  @Caching(
      cacheable = {
          @Cacheable(value = "game", key = "#name")
      },
      put = {
          @CachePut(value = "game", key = "#result.id"),
          @CachePut(value = "game", key = "#result.score")
      }
  )
  public Game getByName(String name) {
    return gameMapper.getGameByName(name);
  }

  public Game getByScore(Double score) {
    Game game = gameMapper.getGameByScore(score);

    //获取某个缓存
    //Cache gameCache = redisCacheManager.getCache("game");
    //手动存入缓存
    //gameCache.put("go", game);
    return game;
  }
}
