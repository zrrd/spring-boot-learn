package cn.learn.springboot10elasticsearch.repository;

import cn.learn.springboot10elasticsearch.model.Game;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * game仓库.
 *
 * @author shaoyijiong
 * @date 2018/8/3
 */
public interface GameRepository extends ElasticsearchRepository<Game,Integer>{

}
