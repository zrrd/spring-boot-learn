package cn.learn.springboot.controller;

import cn.learn.springboot.web.CommonResponse;
import cn.learn.springboot.web.Response;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * stream
 *
 * @author shaoyijiong
 * @date 2021/7/12
 */
@RestController
@RequestMapping("game")
public class GameController {

  public Response<Void> buy() {
    return CommonResponse.success();
  }
}
