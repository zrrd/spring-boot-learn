package cn.learn.springboot.base.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import lombok.extern.slf4j.Slf4j;

/**
 * 我的自定义过滤器.
 *
 * @author 邵益炯
 * @date 2018/9/25
 */
@Slf4j
public class MyFilter2 implements Filter {

  /**
   * 初始化,在自定义过滤器初始化的时候被调用.
   *
   * @param filterConfig 过滤器的一些参数
   */
  @Override
  public void init(FilterConfig filterConfig) {
    log.info("filter init");
  }

  /**
   * 每个用户请求过来时,这个方法都会被调用,FilterChain代表当前请求的责任链 如果想拦截这个请求，可以不调用FilterChain.doFilter，
   * 那么这个请求就直接返回了，所以Filter是一种责任链设计模式，在spring security就大量使用了过滤器，有一条过滤器链。
   *
   * @param request 用户请求
   * @param response 响应
   * @param chain 责任链
   */
  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {
    log.info("doFilter2");
    //对request,response进行预处理
    //进行业务逻辑

    //请求放行
    chain.doFilter(request, response);
  }

  @Override
  public void destroy() {
    log.info("filter destroy");
  }
}
