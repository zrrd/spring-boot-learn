package springboot.learn.service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

/**
 * @author shaoyijiong
 * @date 2019/1/10
 */
@Slf4j
@Service
public class TestService {

  private final TemplateEngine templateEngine;

  @Autowired
  public TestService(TemplateEngine templateEngine) {
    this.templateEngine = templateEngine;
  }

  /**
   * 生成静态文件
   */
  public void createHtml(Map<String, Object> map, Long id) {
    //上下文  页面中渲染的数据
    Context context = new Context();
    context.setVariables(map);
    //输出流
    File file = new File("D://", id + ".html");
    //tyr with resource 自动关闭流
    try (FileWriter writer = new FileWriter(file, false)) {
      //生成html
      templateEngine.process("item", context, writer);
    } catch (IOException e) {
      log.error("生成静态页异常", e);
    }
  }
}
