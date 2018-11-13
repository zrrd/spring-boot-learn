package cn.learn.springboot.controller;

import cn.learn.springboot.bean.Game;
import cn.learn.springboot.mapper.GameMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 游戏controller.
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
@RestController
public class GameController {

  private final GameMapper gameMapper;

  @Autowired
  public GameController(GameMapper gameMapper) {
    this.gameMapper = gameMapper;
  }

  @GetMapping("/game/{id}")
  public Game getGame(@PathVariable Integer id) {
    return gameMapper.getGameById(id);
  }

  @PostMapping("/game")
  public Game insertGame(Game game) {
    gameMapper.insertGame(game);
    return game;
  }
}
