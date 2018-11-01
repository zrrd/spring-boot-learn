package cn.learn.springboot.repository;

import cn.learn.springboot.model.Game;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * game仓库.
 *
 * @author shaoyijiong
 * @date 2018/8/3
 */
public interface GameRepository extends ElasticsearchRepository<Game,Integer>{

}
