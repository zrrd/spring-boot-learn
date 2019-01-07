package cn.learn.springboot.resttemplate;

import java.util.Arrays;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

/**
 * @author 邵益炯
 * @date 2018/11/7
 */
@Slf4j
@Component
public class CookieRestTemplate {

  private final RestTemplate restTemplate;

  private static final String cookie = "acw_tc=2f624a3815465929260118248e36398f47f256bdbe74fb81dbdfa209616af8; _ga=GA1.2.2006454676.1546592927; _gid=GA1.2.303911695.1546592927; INDATA-SESSIONID=b7315d45-144e-4bd9-bdaf-2bd7690076fb; qimo_seosource_a61ef650-dcd2-11e8-a061-178bf33372a5=%E7%AB%99%E5%86%85; qimo_seokeywords_a61ef650-dcd2-11e8-a061-178bf33372a5=; href=https%3A%2F%2Fcrm.byrobot.cn%2F; accessId=a61ef650-dcd2-11e8-a061-178bf33372a5; SESSION=N2YzMjJmMDItNTg5YS00MzAwLTg3NGMtYzE1ZTcxNzk5YzZj; bad_ida61ef650-dcd2-11e8-a061-178bf33372a5=5d6e60b1-1000-11e9-a99d-6da40c60d412; nice_ida61ef650-dcd2-11e8-a061-178bf33372a5=5d6e60b2-1000-11e9-a99d-6da40c60d412; __byuuid=0d972d783dd54657802a44c6de535d32; _gat_gtag_UA_103680512_3=1; pageViewNum=7; JSESSIONID=738C1D514AD5A863C8E80D7ED4516E3F";

  @Autowired
  public CookieRestTemplate(HttpServletRequest servletRequest, RestTemplate restTemplate) {
    this.restTemplate = restTemplate;
  }

  public <T> ResponseEntity<T> postForEntity(String url, Object params, Class<T> c) {
    HttpEntity entity = getHttpEntity(params);
    return restTemplate.exchange(url, HttpMethod.POST, entity, c);
  }

  public <T> T postForObject(String url, Object params, Class<T> c) {
    return postForEntity(url, params, c).getBody();
  }

  public <T> T getForObject(String url, Class<T> c, Object... uriVariables) {
    HttpEntity entity = getHttpEntity(null);
    return restTemplate.exchange(url, HttpMethod.GET, entity, c, uriVariables).getBody();
  }

  private HttpEntity getHttpEntity(Object params) {
    //将当期请求的cookies放入header中去
    List<String> cookieList = Arrays.asList(cookie.split(";"));
    HttpHeaders headers = new HttpHeaders();
    MultiValueMap<String, String> paramsMap = new LinkedMultiValueMap<>();
    try {
      paramsMap.setAll(BeanUtils.describe(params));
    } catch (Exception e) {
      log.info(e.toString());
    }
    headers.put(HttpHeaders.COOKIE, cookieList);
    List<String> a = Arrays.asList("application/json", "charset=utf-8");
    headers.put(HttpHeaders.CONTENT_TYPE, a);
    return new HttpEntity<>(paramsMap, headers);
  }
}
