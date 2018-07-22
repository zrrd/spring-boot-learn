package cn.learn.springboot06datamybatis.controller;

import cn.learn.springboot06datamybatis.bean.User;
import cn.learn.springboot06datamybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author shaoyijiong
 * @date 2018/7/22
 */
@RestController
public class UserContoller {

  @Autowired
  UserMapper userMapper;

  @GetMapping("/user/{id}")
  public User getUser(@PathVariable Integer id) {
    return userMapper.getUserById(id);
  }
}
