package cn.learn.springboot;

import com.xxl.job.core.biz.model.ReturnT;
import com.xxl.job.core.handler.annotation.XxlJob;
import com.xxl.job.core.log.XxlJobLogger;
import org.springframework.stereotype.Service;

/**
 * @author shaoyijiong
 * @date 2020/9/1
 */
@Service
public class XxlJobSpringRun {

  @XxlJob("demoJobHandler")
  public ReturnT<String> execute(String param) {
    XxlJobLogger.log("hello world.");
    return ReturnT.SUCCESS;
  }
}
