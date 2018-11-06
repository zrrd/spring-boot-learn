package cn.learn.springboot.controller;

import cn.learn.springboot.config.AccessToken;
import cn.learn.springboot.config.Audience;
import cn.learn.springboot.model.User;
import cn.learn.springboot.utils.TokenUtils;
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
      /*根据 用户名 audience的 id name 持续时间 base64位加密
      eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJpc3MiOiJoZWxsbyIsImF1ZCI6IjA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2IiwiZXhwIjoxNTQxNDcwODU4LCJuYmYiOjE1NDE0NjcyNTh9.4DE0k179LEWvrX1cDk3fh5maSnYy9RheLpY_uJC4zs0
      通过 . 将token分为3个部分 分别为 {"typ":"JWT","alg":"HS256"}   {"unique_name":"1","iss":"hello","aud":"098f6bcd4621d373cade4e832627b4f6","exp":1541470858,"nbf":1541467258}   和秘钥
      1. Header
      Header 部分是一个 JSON 对象，描述 JWT 的元数据，通常是下面的样子。
      {
        "alg": "HS256",
        "typ": "JWT"
      }
      2.Payload
      Payload 部分也是一个 JSON 对象，用来存放实际需要传递的数据。JWT 规定了7个官方字段，供选用。 也可以定义私有字段

      iss (issuer)：签发人
      exp (expiration time)：过期时间
      sub (subject)：主题
      aud (audience)：受众
      nbf (Not Before)：生效时间
      iat (Issued At)：签发时间
      jti (JWT ID)：编号
      3.Signature
      Signature 部分是对前两部分的签名，防止数据篡改。

      首先，需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。然后，使用 Header 里面指定的签名算法（默认是 HMAC SHA256），按照下面的公式产生签名。


      HMACSHA256(
        base64UrlEncode(header) + "." +
        base64UrlEncode(payload),
        secret)*/
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
