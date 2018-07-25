package cn.learn.cache.controller;

import cn.learn.cache.bean.Game;
import cn.learn.cache.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * 游戏controller.
 *
 * @author shaoyijiong
 * @date 2018/7/25
 */
@RestController
public class GameController {

  @Autowired
  private GameService gameService;

  @GetMapping("/game/{id}")
  public Game getGame(@PathVariable Integer id) {
    return gameService.selectById(id);
  }

  @GetMapping("/game")
  public Game updateGam(Game game) {
    return gameService.updadeGame(game);
  }
}
