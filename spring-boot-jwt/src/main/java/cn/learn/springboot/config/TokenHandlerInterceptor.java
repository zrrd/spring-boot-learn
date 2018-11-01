package cn.learn.springboot.config;

import cn.learn.springboot.controller.LoginCheckException;
import cn.learn.springboot.utils.TokenUtils;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

/**
 * 拦截器.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Slf4j
public class TokenHandlerInterceptor implements HandlerInterceptor {


  private final Audience audience;

  TokenHandlerInterceptor(Audience audience) {
    this.audience = audience;
  }

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
      Object handler) {
    log.info("filter is start");
    //打印拦截的url
    String path = request.getRequestURI().substring(request.getContextPath().length())
        .replaceAll("[/]+$", "");
    log.info("url:" + path);
    //校验token是否正确
    boolean checkJWT = TokenUtils
        .checkJWT(request, audience.getBase64Secret());
    if (checkJWT) {
      return true;
    } else {
      throw new LoginCheckException();
    }
  }
}
