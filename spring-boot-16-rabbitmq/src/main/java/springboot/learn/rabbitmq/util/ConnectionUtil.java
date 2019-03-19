package springboot.learn.rabbitmq.util;

import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

public class ConnectionUtil {

  /**
   * 建立与RabbitMQ的连接
   */
  public static Connection getConnection() throws Exception {
    //定义连接工厂
    ConnectionFactory factory = new ConnectionFactory();
    //设置服务地址
    factory.setHost("192.168.56.101");
    //端口
    factory.setPort(5672);
    //设置账号信息，用户名、密码、vhost
    factory.setVirtualHost("/leyou");
    factory.setUsername("leyou");
    factory.setPassword("leyou");
    // 通过工程获取连接
    return factory.newConnection();
  }

}
