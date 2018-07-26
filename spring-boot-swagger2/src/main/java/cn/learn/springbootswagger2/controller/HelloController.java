package cn.learn.springbootswagger2.controller;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import java.util.Arrays;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * controller.
 *
 * @author shaoyijiong
 * @date 2018/7/26
 */
@RestController
public class HelloController {

  @ApiOperation(value = "获取列表", notes = "notes")
  @GetMapping(value = "lists")
  public List<String> getList() {
    String[] list = new String[]{"a", "b", "c"};
    return Arrays.asList(list);
  }

  @ApiOperation(value = "创建", notes = "根据参数创建")
  @ApiImplicitParam(name = "user", value = "用户详细实体user", required = true, dataType = "User")
  @RequestMapping(value = "", method = RequestMethod.POST)
  public String postUser(@RequestBody String user) {
    System.out.println(user);
    return "success";
  }
}
