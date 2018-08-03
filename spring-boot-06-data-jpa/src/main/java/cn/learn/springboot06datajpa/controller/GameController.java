package cn.learn.springboot06datajpa.controller;

import cn.learn.springboot06datajpa.entity.Game;
import cn.learn.springboot06datajpa.repository.GameRepository;
import javax.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * 游戏.
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
@RestController
public class GameController {

  @Resource
  private GameRepository gameRepository;

  @GetMapping("/game/{id}")
  public Game game(@PathVariable Integer id) {
    return gameRepository.getOne(id);
  }
}
