package springboot.learn.springboot;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * 通过注解 @Slf4j 就能在项目里用log输出 不需要通过loggerFactory再创建logger
 */
@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBoot03LoggingApplicationTests {

  /**
   * 记录器
   */
  Logger logger = LoggerFactory.getLogger(getClass());



	@Test
	public void contextLoads() {
	  //日志级别 由低到高
	  logger.trace("这是trace日志");
    logger.debug("这是debug日志");
    //SpringBoot 默认info级别
    logger.info("这是info日志");
    logger.warn("这是warn日志");
    logger.error("这是error日志");
    log.info("hello");
  }

}
