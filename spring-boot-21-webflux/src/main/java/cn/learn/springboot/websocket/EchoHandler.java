package cn.learn.springboot.websocket;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;

/**
 * @author shaoyijiong
 * @date 2019/5/15
 */
@Component
public class EchoHandler implements WebSocketHandler {

  @Override
  public Mono<Void> handle(final WebSocketSession session) {
    return session.send(
        //接受到的消息
        session.receive()
            //在接受到的消息前加上ECHO
            .map(msg -> session.textMessage("ECHO -> " + msg.getPayloadAsText())));
  }

}

