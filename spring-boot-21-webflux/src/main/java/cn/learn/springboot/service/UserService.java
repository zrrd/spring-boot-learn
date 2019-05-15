package cn.learn.springboot.service;

import cn.learn.springboot.domain.User;
import cn.learn.springboot.exception.ResourceNotFoundException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * @author shaoyijiong
 * @date 2019/5/14
 */
@Service
public class UserService {

  /**
   * 数据存储
   */
  private final Map<String, User> data = new ConcurrentHashMap<>();

  public Flux<User> list() {
    //创建flux 流
    return Flux.fromIterable(this.data.values());
  }

  public Flux<User> getById(final Flux<String> ids) {
    return ids.flatMap(id -> Mono.justOrEmpty(this.data.get(id)));
  }

  public Mono<User> getById(final String id) {
    return Mono.justOrEmpty(this.data.get(id))
        .switchIfEmpty(Mono.error(new ResourceNotFoundException()));
  }

  public Mono<User> createOrUpdate(final User user) {
    this.data.put(user.getId(), user);
    return Mono.just(user);
  }

  public Mono<User> delete(final String id) {
    return Mono.justOrEmpty(this.data.remove(id));
  }
}

