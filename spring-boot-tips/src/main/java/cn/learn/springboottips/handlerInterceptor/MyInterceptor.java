package cn.learn.springboottips.handlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

/**
 * 自定义拦截器.
 *
 * @author 邵益炯
 * @date 2018/9/25
 */
@Slf4j
public class MyInterceptor implements HandlerInterceptor {

  /**
   * 访问方法前.
   */
  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
      Object handler) {
    log.info("preHandle....");
    return true;
  }

  /**
   * 访问方法后.
   */
  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
      ModelAndView modelAndView) {
    log.info("postHandle...");
  }

  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
      Object handler, Exception ex) {
    log.info("afterCompletion...");
  }
}
