package cn.learn.springboot10elasticsearch;

import cn.learn.springboot10elasticsearch.model.Game;
import io.searchbox.client.JestClient;
import io.searchbox.core.Index;
import io.searchbox.core.Index.Builder;
import java.io.IOException;
import java.util.Date;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * 测试 jest 操作elasticsearch.
 *
 * @author 邵益炯
 * @date 2018/8/2
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class JestTest {

  @Autowired
  JestClient jestClient;

  @Test
  public void jestGo() throws IOException {
    Game game = new Game(1, "aa", 3.6, new Date(), 9.8, null);

    // 构建一个索引功能
    // index 索引 还可以标记id 但是我们已经注解在game上了
    Index build = new Builder(game).index("GameParty").type("game").build();
    jestClient.execute(build);
  }
}
