package cn.learn.springbootjwt.controller;

import cn.learn.springbootjwt.config.AccessToken;
import cn.learn.springbootjwt.config.Audience;
import cn.learn.springbootjwt.model.User;
import cn.learn.springbootjwt.utils.TokenUtils;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 测试下登陆.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Slf4j
@RestController
@RequestMapping("/jwt")
public class TestController {

  @Resource
  private Audience audience;

  private static final User USER = new User("1", "1", "1", "哈哈");

  /**
   * 登陆创建token.
   *
   * @return returnModel
   */
  @PostMapping(value = "/login")
  public String login(String userName, String passWord) {
    String id = null;
    if (userName.equals(USER.getUsername()) && passWord.equals(USER.getPassword())) {
      id = USER.getId();
    }

    if (id == null) {
      return "用户名或密码错误";
    } else {
      Map<String, Object> map = new HashMap<>(2);
      map.put("User", USER);
      //根据 用户名 audience的 id name 持续时间 64位加密
      String accessToken = TokenUtils
          .createJWT(userName, audience.getClientId(), audience.getName(),
              audience.getExpiresSecond() * 1000, audience.getBase64Secret());
      AccessToken accessTokenEntity = new AccessToken();
      accessTokenEntity.setAccessToken(accessToken);
      accessTokenEntity.setExpiresIn(audience.getExpiresSecond());
      accessTokenEntity.setTokenType("bearer");
      map.put("accessToken", accessTokenEntity);
      return map.toString();
    }
  }

  @GetMapping("/hello")
  public String hello() {
    //throw new LoginCheckException();
    return "hello";
  }
}
