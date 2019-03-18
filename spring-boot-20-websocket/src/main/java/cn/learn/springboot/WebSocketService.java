package cn.learn.springboot;

import java.io.IOException;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.atomic.AtomicInteger;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import lombok.EqualsAndHashCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * @author shaoyijiong
 * @date 2019/3/18
 */
@ServerEndpoint("/ws")
@Service
@EqualsAndHashCode
@Slf4j
public class WebSocketService {

  /**
   * 用来记录在线连接数
   */
  private static AtomicInteger onlineCount = new AtomicInteger(0);
  private static CopyOnWriteArraySet<WebSocketService> webSocketServices = new CopyOnWriteArraySet<>();

  private Session session;

  /**
   * 新连接
   */
  @OnOpen
  public void onOpen(Session session) throws IOException {
    this.session = session;
    webSocketServices.add(this);
    onlineCount.incrementAndGet();
    log.info("有新连接加入！当前的在线人数为" + onlineCount.get());
    sendMessage("有新的连接加入了");
  }

  /**
   * 关闭连接
   */
  @OnClose
  public void onClose() {
    webSocketServices.remove(this);
    onlineCount.decrementAndGet();
    log.info("有一个连接关闭！当前的在线人数为" + onlineCount.get());
  }

  /**
   * 收到客户端消息后调用的方法
   *
   * @param message 客户端发送的消息
   */
  @OnMessage
  public void onMessage(String message, Session session) throws IOException {
    log.info(message);
    for (WebSocketService item : webSocketServices) {
      //String userName = item.session.getUserPrincipal().getName();
      //System.out.println(userName);
      item.sendMessage(message);
    }
  }

  private void sendMessage(String message) throws IOException {
    this.session.getBasicRemote().sendText(message);
  }

  @OnError
  public void onError(Session session, Throwable error) {
    log.error("发生错误", error);
  }
}
