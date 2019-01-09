package springboot.learn.rabbitmq.simple;


import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import springboot.learn.rabbitmq.util.ConnectionUtil;

/**
 * 生产者
 */
@SuppressWarnings("all")
public class Send {

  private static final String QUEUE_NAME = "simple_queue";

  public static void main(String[] argv) throws Exception {
    // 获取到连接
    Connection connection = ConnectionUtil.getConnection();
    // 从连接中创建通道，使用通道才能完成消息相关的操作
    Channel channel = connection.createChannel();
    // 声明（创建）队列
    channel.queueDeclare(QUEUE_NAME, false, false, false, null);
    // 消息内容
    String message = "Hello World!";
    // 向指定的队列中发送消息
    channel.basicPublish("", QUEUE_NAME, null, message.getBytes());

    System.out.println(" [x] Sent '" + message + "'");

    //关闭通道和连接
    channel.close();
    connection.close();
  }
}