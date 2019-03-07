package cn.learn.springboot.aop;

import org.springframework.stereotype.Service;

/**
 * 用户接口
 *
 * @author shaoyijiong
 * @date 2019/3/7
 */
@Service
public class UserServiceImpl implements UserService {

  @Override
  public String print(String user) {
    if (user == null) {
      System.out.println("user 为空");
    } else {
      System.out.println(user);
    }
    return "hh";
  }

}
