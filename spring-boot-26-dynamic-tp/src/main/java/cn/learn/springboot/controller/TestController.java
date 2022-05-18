package cn.learn.springboot.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author shaoyijiong
 * @date 2022/5/13
 */
@RestController
public class TestController {

    @RequestMapping("test")
    public void test() {

    }
}