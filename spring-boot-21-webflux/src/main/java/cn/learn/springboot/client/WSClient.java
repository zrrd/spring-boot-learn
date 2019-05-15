package cn.learn.springboot.client;

import java.net.URI;
import java.time.Duration;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;
import reactor.core.publisher.Flux;

/**
 * @author shaoyijiong
 * @date 2019/5/15
 */
public class WSClient {

  /**
   * 请求websocket
   *
   * 访问 WebSocket 不能使用 WebClient，而应该使用专门的 WebSocketClient 客户端。Spring Boot 的 WebFlux 模板中默认使用的是
   * Reactor Netty 库。Reactor Netty 库提供了 WebSocketClient 的实现。在代码清单 12 中，我们访问的是上面小节中创建的 WebSocket
   * 服务。WebSocketClient 的 execute 方法与 WebSocket 服务器建立连接，并执行给定的 WebSocketHandler 对象。该
   * WebSocketHandler 对象与代码清单 6 中的作用是一样的，只不过它是工作于客户端，而不是服务器端。在 WebSocketHandler 的实现中，首先通过
   * WebSocketSession 的 send 方法来发送字符串 Hello 到服务器端，然后通过 receive 方法来等待服务器端的响应并输出。方法
   * take(1)的作用是表明客户端只获取服务器端发送的第一条消息。
   */
  public static void main(final String[] args) {
    final WebSocketClient client = new ReactorNettyWebSocketClient();
    client.execute(URI.create("ws://localhost:8080/echo"), session ->
        session.send(Flux.just(session.textMessage("Hello")))
            .thenMany(session.receive().take(1).map(WebSocketMessage::getPayloadAsText))
            .doOnNext(System.out::println)
            .then())
        .block(Duration.ofMillis(5000));
  }
}

