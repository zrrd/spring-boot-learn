package cn.learn.springboot;

import cn.learn.springboot.model.Game;
import cn.learn.springboot.repository.GameRepository;
import java.util.Date;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author 邵益炯
 * @date 2018/8/3
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringDataElasticsearchTest {

  @Autowired
  GameRepository gameRepository;

  @Test
  public void go() {
    Game game = new Game(2, "bb", 3.6, new Date(), 9.8, null);
    //存放
    gameRepository.index(game);
  }

}
