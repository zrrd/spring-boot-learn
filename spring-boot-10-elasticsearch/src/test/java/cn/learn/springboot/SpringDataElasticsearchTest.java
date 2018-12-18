package cn.learn.springboot;

import cn.learn.springboot.model.Game;
import cn.learn.springboot.model.Item;
import cn.learn.springboot.repository.GameRepository;
import cn.learn.springboot.repository.ItemRepository;
import java.util.Date;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
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

  /**
   * 通过template的来操作es 类似与redis
   */
  @Autowired
  ElasticsearchTemplate template;

  @Autowired
  ItemRepository itemRepository;

  @Test
  public void templateTest() {
    //创建索引  可以是类 也可以是字符串
    //template.createIndex(Item.class);
    //添加映射
    //template.putMapping(Item.class);

    itemRepository.save(new Item(1L, "手机", null, null, null, null));
  }


  @Test
  public void go() {
    Game game = new Game(2, "bb", 3.6, new Date(), 9.8, null);
    //存放
    gameRepository.index(game);
  }

}
