package cn.learn.spring.amis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author shaoyijiong
 * @date 2022/5/18
 */
@Controller
public class TestController {

    @RequestMapping("index")
    public String go() {
        return "index";
    }
}