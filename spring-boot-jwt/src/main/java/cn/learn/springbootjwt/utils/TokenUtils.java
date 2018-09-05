package cn.learn.springbootjwt.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.security.Key;
import java.util.Date;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;
import lombok.extern.slf4j.Slf4j;

/**
 * token校验工具类.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Slf4j
public class TokenUtils {

  /**
   * Utils防止构造.
   */
  private TokenUtils() {
  }


  /**
   * 此方法在后端拦截器中使用，检测前端发来的请求是否带有token值.
   */
  public static boolean checkJWT(HttpServletRequest request, String base64Secret) {
    boolean b = false;
    //从request的header中获得token
    String auth = request.getHeader("token");
    if (auth != null) {
      log.info("claims:" + parseJWT(auth, base64Secret));
      Claims claims = parseJWT(auth, base64Secret);
      b = claims != null;
    }
    if (!b) {
      log.error("token验证异常" + auth);
    }
    return b;
  }

  /**
   * 此方法在checkJWT中调用，解析token值，将jwt类型的token值分解成audience模块. 可以在parseJWT方法中打断点，查看Claims
   * 对象，发现其字段存储的值与audience对象值.
   */
  private static Claims parseJWT(String jsonWebToken, String base64Security) {
    try {
      return Jwts.parser()
          .setSigningKey(DatatypeConverter.parseBase64Binary(base64Security))
          .parseClaimsJws(jsonWebToken).getBody();
    } catch (Exception ex) {
      return null;
    }
  }

  /**
   * 创建token.
   */
  public static String createJWT(String name, String audience, String issuer, long ttlMillis,
      String base64Security) {
    SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

    long nowMillis = System.currentTimeMillis();
    Date now = new Date(nowMillis);

    byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(base64Security);
    Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());

    JwtBuilder builder = Jwts.builder().setHeaderParam("typ", "JWT")
        .claim("unique_name", name)
        .setIssuer(issuer)
        .setAudience(audience)
        .signWith(signatureAlgorithm, signingKey);
    if (ttlMillis >= 0) {
      long expMillis = nowMillis + ttlMillis;
      Date exp = new Date(expMillis);
      builder.setExpiration(exp).setNotBefore(now);
    }

    return builder.compact();
  }

}