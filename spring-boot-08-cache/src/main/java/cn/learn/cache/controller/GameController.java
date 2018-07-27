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

  @GetMapping("/game/name/{name}")
  public Game getGame(@PathVariable String name) {
    return gameService.getByName(name);
  }

  @GetMapping("/game")
  public Game updateGam(Game game) {
    return gameService.updadeGame(game);
  }

  @GetMapping("/game/score/{score}")
  public Game getGameByScore(@PathVariable Double score) {
    return gameService.getByScore(score);
  }

}
