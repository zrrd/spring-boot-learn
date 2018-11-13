package cn.learn.springboot.config;

import java.util.Date;
import java.util.List;
import java.util.Locale;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.Formatter;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.validation.MessageCodesResolver;
import org.springframework.validation.Validator;
import org.springframework.web.method.annotation.RequestParamMapMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.config.annotation.AsyncSupportConfigurer;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 使用WebMvcConfigurer可以来扩展SpringMVC的功能. 在autoConfig之外的功能
 *
 * @author shaoyijiong
 * @date 2018/7/11
 */
@Configuration
public class MyMvcConfig implements WebMvcConfigurer {

  /**
   * . 添加路由映射
   */
  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/hi").setViewName("success");
  }

  /**
   * 添加拦截器.
   */
  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    //将自己的登陆拦截器放进来
        /*registry.addInterceptor(new LoginHandlerInterceptor()).addPathPatterns("/**")
                    .excludePathPatterns("/login", "/", "index.html", "/user/login");*/
  }


  /**
   * 定制URL规则.
   * <p>setUseSuffixPatternMatch : 设置是否是后缀模式匹配，如“/user”是否匹配/user.*，默认真即匹配；</p>
   * <p>setUseTrailingSlashMatch : 设置是否自动后缀路径模式匹配，如“/user”是否匹配“/user/”，默认真即匹配</p>
   */
  @Override
  public void configurePathMatch(PathMatchConfigurer configurer) {
    configurer.setUseSuffixPatternMatch(false).setUseTrailingSlashMatch(true);
  }

  /**
   * 是否通过请求Url的扩展名来决定media type.
   */
  @Override
  public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
    configurer.favorPathExtension(true)
        /* 不检查Accept请求头 */
        .ignoreAcceptHeader(true)
        .parameterName("mediaType")
        /* 设置默认的media type */
        .defaultContentType(MediaType.TEXT_HTML)
        /* 请求以.html结尾的会被当成MediaType.TEXT_HTML*/
        .mediaType("html", MediaType.TEXT_HTML)
        /* 请求以.json结尾的会被当成MediaType.APPLICATION_JSON*/
        .mediaType("json", MediaType.APPLICATION_JSON);
  }

  @Override
  public void configureAsyncSupport(AsyncSupportConfigurer configurer) {
    /*异步处理请求。可以先释放容器分配给请求的线程与相关资源，减轻系统负担，释放了容器所分配线程的请求，
    其响应将被延后，可以在耗时处理完成（例如长时间的运算）时再对客户端进行响应。*/
    final ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
    //核心线程数
    executor.setCorePoolSize(2);
    //最大线程数
    executor.setMaxPoolSize(2);
    //队列初始化容量
    executor.setQueueCapacity(2);
    //线程名
    executor.setThreadNamePrefix("AsyncTaskExecutor-");
    executor.initialize();
    configurer.setTaskExecutor(executor);
  }

  @Override
  public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {

  }

  /**
   * 格式化.
   */
  @Override
  public void addFormatters(FormatterRegistry registry) {
    registry.addFormatter(new Formatter<Date>() {
      @Override
      public Date parse(String date, Locale locale) {
        return new Date(Long.parseLong(date));
      }

      @Override
      public String print(Date date, Locale locale) {
        return Long.valueOf(date.getTime()).toString();
      }
    });

    //@DateTimeFormat(pattern = "yyyy-MM-dd") 在请求的参数上添加
  }

  /**
   * 静态资源文件处理.
   */
  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    //这样就能访问 通过url访问upload下的静态资源文件了
    registry.addResourceHandler("/upload/**").addResourceLocations("classpath:/upload/");
  }

  /**
   * 解决跨域请求.  另外，还可以通过添加 Filter 的方式，配置 CORS 规则，并手动指定对哪些接口有效。
   */
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
        .allowedOrigins("*")
        .allowCredentials(true)
        .allowedMethods("GET", "POST", "DELETE", "PUT")
        .maxAge(3600);
  }

  /**
   * 视图解析器.
   */
  @Override
  public void configureViewResolvers(ViewResolverRegistry registry) {
  }

  /**
   * 自定义方法参数解析器.
   */
  @Override
  public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
    resolvers.add(new RequestParamMapMethodArgumentResolver());
  }

  /**
   * 返回结果处理器.
   */
  @Override
  public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> handlers) {

  }

  /**
   * 消息体转换.
   */
  @Override
  public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {

  }

  /**
   * 消息体转换拓展.
   */
  @Override
  public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {

  }

  /**
   * 异常处理.
   */
  @Override
  public void configureHandlerExceptionResolvers(List<HandlerExceptionResolver> resolvers) {

  }

  /**
   * 异常处理拓展.
   */
  @Override
  public void extendHandlerExceptionResolvers(List<HandlerExceptionResolver> resolvers) {

  }

  @Override
  public Validator getValidator() {
    return null;
  }

  @Override
  public MessageCodesResolver getMessageCodesResolver() {
    return null;
  }
}
