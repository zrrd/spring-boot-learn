package cn.learn.springboot;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * @author shaoyijiong
 * @date 2019/3/18
 */
@Configuration
public class WebSocketConfig {

  /**
   * 创建服务器端点
   */
  @Bean
  public ServerEndpointExporter serverEndpointExporter() {
    return new ServerEndpointExporter();
  }
}
