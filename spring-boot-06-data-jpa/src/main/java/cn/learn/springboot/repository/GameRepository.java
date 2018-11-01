package cn.learn.springboot.repository;

import cn.learn.springboot.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 游戏数据库操作.
 * 继承JpaRepository
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
public interface GameRepository extends JpaRepository<Game,Integer>{

}
