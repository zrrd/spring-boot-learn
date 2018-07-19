package springboot.learn.springboot.controller;

import java.util.Map;
import javax.servlet.http.HttpSession;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import springboot.learn.springboot.controller.exception.LoginException;

/**
 * 登录.
 *
 * @author shaoyijiong
 * @date 2018/7/17
 */
@Controller
public class LoginController {

  /**
   * 登录请求.
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
      session.setAttribute("loginUser", username);
      //防止表单重复提交
      return "redirect:/main.html";
    } else {
      //状态码为10000
      throw new LoginException();
    }
  }

  @GetMapping("/login")
  public String login() {
    return "login";
  }

  @GetMapping("/main")
  public String main() {
    return "main";
  }
}
