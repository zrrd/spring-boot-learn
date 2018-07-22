package cn.learn.springboot06datamybatis.mapper;

import cn.learn.springboot06datamybatis.bean.User;

public interface UserMapper {

  public User getUserById(Integer id);
}
