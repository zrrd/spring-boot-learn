package cn.learn.springboot.controller;

import cn.learn.springboot.bean.Game;
import cn.learn.springboot.mapper.GameDetailMapper;
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
  private final GameDetailMapper gameDetailMapper;

  @Autowired
  public GameController(GameMapper gameMapper, GameDetailMapper gameDetailMapper) {
    this.gameMapper = gameMapper;
    this.gameDetailMapper = gameDetailMapper;
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

  @GetMapping("/gameDetail/{id}")
  public String gameDetail(@PathVariable("id") Integer id) {
    return gameDetailMapper.selectById(id).toString();
  }
}
