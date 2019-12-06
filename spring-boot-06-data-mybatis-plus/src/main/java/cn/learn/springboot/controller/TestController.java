package cn.learn.springboot.controller;

import cn.learn.springboot.bean.Game;
import cn.learn.springboot.mapper.GameMapper;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author shaoyijiong
 * @date 2019/12/6
 */
@RestController
public class TestController {

  private final GameMapper gameMapper;

  public TestController(GameMapper gameMapper) {
    this.gameMapper = gameMapper;
  }

  @RequestMapping("test1")
  public List<Game> test1() {
    return gameMapper.selectByPublishDate(LocalDate.of(2018, 7, 6));
  }

  @RequestMapping("test2")
  public List<Game> test2() {
    return gameMapper.selectByUpdateTime(LocalDateTime.now().plusYears(-10), LocalDateTime.now());
  }
}
