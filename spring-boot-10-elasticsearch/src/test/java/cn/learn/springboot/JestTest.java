package cn.learn.springboot;

import cn.learn.springboot.model.Game;
import io.searchbox.client.JestClient;
import io.searchbox.client.JestResult;
import io.searchbox.core.Index;
import io.searchbox.core.Index.Builder;
import io.searchbox.core.Search;
import io.searchbox.core.SearchResult;
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

    // 构建一个索引功能 存放
    // index 索引 还可以标记id 但是我们已经注解在game上了  注意索引必须是小写
    Index build = new Builder(game).index("game_party").type("game").build();
    JestResult jestResult = jestClient.execute(build);
    System.out.println(jestResult.getJsonString());
  }

  /**
   * 测试搜索
   */
  @Test
  public void jestSearch() throws IOException {
    //查询表达式
    String json = "{\"query\" : {\"match\" : {\"name\" : \"aa\"}}}";
    //构建搜索
    Search build = new Search.Builder(json).addIndex("game_party").addType("game").build();
    SearchResult result = jestClient.execute(build);
    System.out.println(result.getJsonString());

  }
}
