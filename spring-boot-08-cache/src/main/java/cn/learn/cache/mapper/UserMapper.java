package cn.learn.cache.mapper;


import cn.learn.cache.bean.User;

public interface UserMapper {

  /**
   * 通过id获得用户.
   *
   * @param id 用户id
   * @return 用户
   */
  User getUserById(Integer id);
}
