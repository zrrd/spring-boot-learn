package springboot.learn.springboot.compent;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

/**
 * 登陆拦截器 签查登陆
 *
 * @author shaoyijiong
 * @since 2018/7/16
 */
public class LoginHandlerInterceptor implements HandlerInterceptor {

  //目标方法执行之前
  @Override
  public boolean preHandle(HttpServletRequest httpServletRequest,
      HttpServletResponse httpServletResponse, Object o) throws Exception {
    Object user = httpServletRequest.getSession().getAttribute("loginUser");
    if (user == null) {
      httpServletRequest.getRequestDispatcher("login")
          .forward(httpServletRequest, httpServletResponse);
      return false;
    } else {
      return true;
    }
  }

  @Override
  public void postHandle(HttpServletRequest httpServletRequest,
      HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView)
      throws Exception {

  }

  @Override
  public void afterCompletion(HttpServletRequest httpServletRequest,
      HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

  }
}
