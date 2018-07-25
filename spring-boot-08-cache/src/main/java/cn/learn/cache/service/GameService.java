package cn.learn.cache.service;

import cn.learn.cache.bean.Game;
import cn.learn.cache.mapper.GameMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

/**
 * gameService.
 *
 * @author shaoyijiong
 * @date 2018/7/25
 */
@Slf4j
@Service
public class GameService {

  @Autowired
  GameMapper gameMapper;

  /**
   * key默认是方法参数.
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
}
