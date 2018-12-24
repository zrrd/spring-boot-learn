package cn.learn.springboot.repository;

import cn.learn.springboot.model.Item;
import java.util.List;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * .
 *
 * @author shaoyijiong
 * @date 2018/12/18
 */
public interface ItemRepository extends ElasticsearchRepository<Item, Long> {

  List<Item> findByPriceBetween(double price1, double price2);
}
