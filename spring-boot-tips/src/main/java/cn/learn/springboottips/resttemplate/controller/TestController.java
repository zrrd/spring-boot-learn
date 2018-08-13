package cn.learn.springboottips.resttemplate.controller;

import cn.learn.springboottips.resttemplate.Response;
import com.alibaba.fastjson.JSONObject;
import javax.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * 测试controller.
 *
 * @author shaoyijiong
 * @date 2018/7/26
 */
@RestController
public class TestController {

  @Resource
  private RestTemplate restTemplate;

  private static final String RESPONSE_JSON = "{'code':200,'message':'成功','data':"
      + "{'name':'小明','age':18}}";

  /**
   * 测试. 无json参数,无路径参数
   *
   * @return json格式的数据
   */
  @GetMapping("/get")
  public Response hello() {
    return JSONObject.parseObject(RESPONSE_JSON, Response.class);
  }

  /**
   * 测试. 带json参数,无路径参数
   *
   * @param json json格式的数据
   * @return json格式的数据
   */
  @GetMapping("/get/json")
  public Response hello(@RequestBody String json) {
    JSONObject jsonObject = JSONObject.parseObject(json);
    System.out.println(jsonObject);
    return JSONObject.parseObject(RESPONSE_JSON, Response.class);
  }

  /**
   * 测试. 带json参数,带路径参数
   *
   * @param json json格式的数据
   * @return json格式的数据
   */
  @PostMapping("/get/{id}")
  public Response hello(@PathVariable Integer id, @RequestBody String json) {
    System.out.println(id);
    JSONObject jsonObject = JSONObject.parseObject(json);
    System.out.println(jsonObject);
    return JSONObject.parseObject(RESPONSE_JSON, Response.class);
  }

  /**
   * 测试.
   *
   * @param id 根据id区分
   * @return 返回数据
   */
  @GetMapping("/go/{id}")
  public Response go(@PathVariable Integer id) {
    //请求的所有信息
    ResponseEntity<Response> response0;
    //只包含请求体信息
    Response response1;
    String param = "{'a':'a'}";
    switch (id) {
      case (1):
        //发送一个HTTP GET请求 返回的ResponseEntity包含了响应体所映射成的对象
        response0 = restTemplate.getForEntity("http://localhost:8080/get", Response.class);
        return response0.getBody();
      case (2):
        //发送一个HTTP POST请求，返回的请求体将映射为一个对象,这里的{}相当于url参数,就是id
        response1 = restTemplate
            .postForObject("http://localhost:8080/get/{id}", param, Response.class, id);
        return response1;
      case (3):
        //这个参数param是url参数
        response1 = restTemplate.getForObject("http://localhost:8080/get", Response.class, param);
        return response1;
      default:
        response0 = restTemplate.getForEntity("http://localhost:8080/get", Response.class);
        return response0.getBody();
    }
  }
}
