package cn.learn.springboot.controller;

import java.time.Duration;
import java.util.concurrent.ThreadLocalRandom;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.util.function.Tuples;

/**
 * 服务器推送
 *
 * @author shaoyijiong
 * @date 2019/5/14
 */
@RestController
@RequestMapping("/sse")
public class SseController {

  /**
   * Tuples元组
   */
  @GetMapping("/randomNumbers")
  public Flux<ServerSentEvent<Integer>> randomNumbers() {
    return Flux.interval(Duration.ofSeconds(1))
        .map(seq -> Tuples.of(seq, ThreadLocalRandom.current().nextInt()))
        .map(data -> ServerSentEvent.<Integer>builder()
            .event("random")
            .id(Long.toString(data.getT1()))
            .data(data.getT2())
            .build());
  }
}