package cn.learn.springboot.repository;

import cn.learn.springboot.model.Item;
import java.util.List;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * @author shaoyijiong
 * @date 2018/12/18
 */
public interface ItemRepository extends ElasticsearchRepository<Item, Long> {

  /**
   * 查找价格区间
   *
   * @param price1 价格1
   * @param price2 价格2
   * @return 区间商品
   */
  List<Item> findByPriceBetween(double price1, double price2);
}
