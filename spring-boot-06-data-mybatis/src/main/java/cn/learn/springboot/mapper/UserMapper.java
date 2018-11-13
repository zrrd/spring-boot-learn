package cn.learn.springboot.mapper;

import cn.learn.springboot.bean.User;

public interface UserMapper {

  User getUserById(Integer id);
}
