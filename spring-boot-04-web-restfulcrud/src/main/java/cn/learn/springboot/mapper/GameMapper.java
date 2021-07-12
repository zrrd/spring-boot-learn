package cn.learn.springboot.mapper;

import cn.learn.springboot.model.Game;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;

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