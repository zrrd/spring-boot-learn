package cn.learn.springboot;

import cn.learn.springboot.bean.Game;
import cn.learn.springboot.mapper.GameMapper;
import java.time.LocalDate;
import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author shaoyijiong
 * @date 2019/12/6
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class GoTest {

  @Autowired
  private GameMapper gameMapper;


  @Test
  public void selectList() {
    final List<Game> games = gameMapper.selectList(null);
    System.out.println(games);
  }

  @Test
  public void selectByName() {
    final List<Game> games = gameMapper.selectByName("hh");
    System.out.println(games);
  }

  /**
   * 根据java8时间来筛选时间
   */
  @Test
  public void selectListByTime() {
    final List<Game> games = gameMapper.selectByPublishDate(LocalDate.of(2018, 7, 3));
    System.out.println(games);
  }
}
