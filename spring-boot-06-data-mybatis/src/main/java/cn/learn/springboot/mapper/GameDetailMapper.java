package cn.learn.springboot.mapper;

import cn.learn.springboot.bean.GameDetail;

/**
 * @author shaoyijiong
 */
public interface GameDetailMapper {

  GameDetail selectById(Integer id);
}
