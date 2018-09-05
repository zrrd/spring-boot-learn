package cn.learn.springbootjwt.typeshandlers;

import cn.learn.springbootjwt.controller.LoginCheckException;
import cn.learn.springbootjwt.model.Audience;
import cn.learn.springbootjwt.utils.CreateTokenUtils;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import javax.annotation.Resource;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

/**
 * 拦截器.
 *
 * @author 邵益炯
 * @date 2018/9/5
 */
@Slf4j
@WebFilter(filterName = "basicFilter", urlPatterns = "/*")
public class HTTPBasicAuthorizeHandler implements Filter {

  /**
   * 不拦截的请求.
   */
  private static final Set<String> ALLOWED_PATHS = Collections
      .unmodifiableSet(new HashSet<>(Collections.singletonList("/jwt/login")));

  @Resource
  private Audience audience;

  @Override
  public void init(FilterConfig filterConfig) {
    log.info("filter is init");
  }

  @Override
  public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
      FilterChain filterChain) {
    log.info("filter is start");
    try {
      log.info("audience:" + audience.getBase64Secret());
      HttpServletRequest request = (HttpServletRequest) servletRequest;
      String path = request.getRequestURI().substring(request.getContextPath().length())
          .replaceAll("[/]+$", "");
      log.info("url:" + path);
      boolean allowedPath = ALLOWED_PATHS.contains(path);
      if (allowedPath) {
        //在白名单中直接转发过去
        filterChain.doFilter(servletRequest, servletResponse);
      } else {
        //校验token是否正确
        boolean checkJWT = CreateTokenUtils
            .checkJWT((HttpServletRequest) servletRequest, audience.getBase64Secret());
        if (checkJWT) {
          filterChain.doFilter(servletRequest, servletResponse);
        } else {
          throw new LoginCheckException();
        }
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  @Override
  public void destroy() {
    log.info("filter is destroy");
  }
}