package cn.learn.springboot;

import cn.learn.springboot.model.Game;
import cn.learn.springboot.model.Item;
import cn.learn.springboot.repository.GameRepository;
import cn.learn.springboot.repository.ItemRepository;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.elasticsearch.index.query.MatchQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.aggregations.AggregationBuilders;
import org.elasticsearch.search.aggregations.bucket.terms.StringTerms;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.aggregation.AggregatedPage;
import org.springframework.data.elasticsearch.core.query.FetchSourceFilter;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.data.querydsl.QPageRequest;
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
    template.createIndex(Item.class);
    //添加映射
    template.putMapping(Item.class);

    itemRepository.save(new Item(1L, "手机", null, null, null, null));
  }

  @Test
  public void addTemplate() {
    List<Item> list = new ArrayList<>();
    list.add(new Item(1L, "小米手机7", "手机", "小米", 3299.00, "http://image.leyou.com/13123.jpg"));
    list.add(new Item(2L, "坚果手机R1", "手机", "锤子", 3699.00, "http://image.leyou.com/13123.jpg"));
    list.add(new Item(3L, "华为META10", "手机", "华为", 4499.00, "http://image.leyou.com/13123.jpg"));
    list.add(new Item(4L, "小米Mix2S", "手机", "小米", 4299.00, "http://image.leyou.com/13123.jpg"));
    list.add(new Item(5L, "荣耀V10", "手机", "华为", 2799.00, "http://image.leyou.com/13123.jpg"));
    // 接收对象集合，实现批量新增
    itemRepository.saveAll(list);
  }


  @Test
  public void findTemplate() {
    Iterable<Item> items1 = itemRepository.findAll();
    List<Item> items = itemRepository.findByPriceBetween(2000.0, 3500.0);
    System.out.println(items);
  }

  @Test
  public void queryTemplate() {
    QueryBuilder matchQuery = QueryBuilders.matchQuery("title", "小米");
    //原生查询  可以分页
    Iterable<Item> items = itemRepository.search(matchQuery);

    //可以整合原生api
    //添加查询条件  结果过滤
    NativeSearchQueryBuilder queryBuilder = new NativeSearchQueryBuilder();
    queryBuilder.withQuery(matchQuery);
    //结果过滤
    queryBuilder.withSourceFilter(new FetchSourceFilter(new String[]{"id", "title"}, null));
    queryBuilder.withPageable(PageRequest.of(1, 10));
    Page<Item> items1 = itemRepository.search(queryBuilder.build());
  }

  @Test
  public void testAgg() {
    NativeSearchQueryBuilder queryBuilder = new NativeSearchQueryBuilder();
    // 不查询任何结果
    queryBuilder.withSourceFilter(new FetchSourceFilter(new String[]{""}, null));
    // 1、添加一个新的聚合，聚合类型为terms，聚合名称为brands，聚合字段为brand
    queryBuilder.addAggregation(
        AggregationBuilders.terms("brands").field("brand"));
    // 2、查询,需要把结果强转为AggregatedPage类型
    AggregatedPage<Item> aggPage = (AggregatedPage<Item>) this.itemRepository
        .search(queryBuilder.build());
    // 3、解析
    // 3.1、从结果中取出名为brands的那个聚合，
    // 因为是利用String类型字段来进行的term聚合，所以结果要强转为StringTerm类型
    StringTerms agg = (StringTerms) aggPage.getAggregation("brands");
    // 3.2、获取桶
    List<StringTerms.Bucket> buckets = agg.getBuckets();
    // 3.3、遍历
    for (StringTerms.Bucket bucket : buckets) {
      // 3.4、获取桶中的key，即品牌名称
      System.out.println(bucket.getKeyAsString());
      // 3.5、获取桶中的文档数量
      System.out.println(bucket.getDocCount());
    }

  }

  @Test
  public void go() {
    Game game = new Game(2, "bb", 3.6, new Date(), 9.8, null);
    //存放
    gameRepository.index(game);
  }

}
