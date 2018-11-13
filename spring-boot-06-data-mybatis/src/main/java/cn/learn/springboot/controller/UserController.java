package cn.learn.springboot.controller;

import cn.learn.springboot.bean.User;
import cn.learn.springboot.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * .
 * @author shaoyijiong
 * @date 2018/7/22
 */
@RestController
public class UserController {

  private final UserMapper userMapper;

  @Autowired
  public UserController(UserMapper userMapper) {
    this.userMapper = userMapper;
  }

  @GetMapping("/user/{id}")
  public User getUser(@PathVariable Integer id) {
    return userMapper.getUserById(id);
  }
}
