package cn.learn.springboot06.controller;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * jdbc.
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
@Controller
public class HelloController {

  @Autowired
  JdbcTemplate jdbcTemplate;

  @ResponseBody
  @GetMapping("/hello")
  public Map<String, Object> map() {
    List<Map<String, Object>> list = jdbcTemplate.queryForList("SELECT * FROM department");
    return list.get(0);
  }
}
