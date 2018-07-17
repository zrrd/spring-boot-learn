package springboot.learn.springboot.controller;

import java.util.Map;
import javax.servlet.http.HttpSession;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * 登录
 *
 * @author shaoyijiong
 * @date 2018/7/17
 */
@Controller
public class LoginController {

  /**
   * 登录请求
   *
   * @param username 用户名
   * @param password 密码
   * @param session session
   * @param map 返回响应
   * @return 成功界面
   */
  @PostMapping("/user/login")
  public String login(String username, String password, HttpSession session,
      Map<String, String> map) {
    if (StringUtils.isNotBlank(username) && "123456".equals(password)) {
      session.setAttribute("username", username);
      return "index";
    } else {
      map.put("msg", "用户名或密码错误");
      return "login";
    }
  }

  @GetMapping
  public String login() {
    return "login";
  }
}
