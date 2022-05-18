package cn.learn.spring.amis.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author shaoyijiong
 * @date 2022/5/18
 */
@RestController
public class DataController {
    @RequestMapping("data")
    public String data() {
        return "{\n" +
                "  \"status\": 0,\n" +
                "  \"msg\": \"\",\n" +
                "  \"data\": {\n" +
                "    \"title\": \"Test Page Component\",\n" +
                "    \"date\": \"2017-10-13\"\n" +
                "  }\n" +
                "}";
    }
}