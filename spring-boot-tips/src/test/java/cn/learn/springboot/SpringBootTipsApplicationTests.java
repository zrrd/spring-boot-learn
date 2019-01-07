package cn.learn.springboot;

import cn.learn.springboot.resttemplate.CookieRestTemplate;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootTipsApplicationTests {


  @Autowired
  RestTemplate restTemplate;

  @Autowired
  CookieRestTemplate cookieRestTemplate;

  @Test
  public void restTemplateTest() {
    String tea="{\"lemon\":\"aaa\"}";
    restTemplate.put("http://47.100.252.127:9200/lemon/soar/12",tea);

  }

  @Test
  public void testLogin() {
    Object object = cookieRestTemplate
        .getForObject("https://crm.byrobot.cn/api/robot/list?searchSortType=1&robotDefId=", Object.class);
    System.out.println(object);
  }
}
