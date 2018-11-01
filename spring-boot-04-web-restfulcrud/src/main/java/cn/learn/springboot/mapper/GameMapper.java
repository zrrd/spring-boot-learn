package cn.learn.springboot.mapper;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import cn.learn.springboot.model.Game;

/**
 * .
 * @author win
 */
public interface GameMapper extends BaseMapper<Game> {

  /**
   * 所有.
   *
   * @return 游戏
   */
  List<Game> selectAll();

}