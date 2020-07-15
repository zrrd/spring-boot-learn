package cn.learn.springboot;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import org.assertj.core.util.Lists;
import org.junit.Test;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.ResponseErrorHandler;
import org.springframework.web.client.RestTemplate;

/**
 * @author shaoyijiong
 * @date 2020/1/10
 */
public class A {

  @Test
  public void aVoid() {
    RestTemplate restTemplate = new RestTemplate();
    restTemplate.setErrorHandler(new ResponseErrorHandler() {
      @Override
      public boolean hasError(ClientHttpResponse clientHttpResponse) throws IOException {
        System.out.println(clientHttpResponse);
        return false;
      }

      @Override
      public void handleError(ClientHttpResponse clientHttpResponse) throws IOException {
        System.out.println(clientHttpResponse);
      }
    });
    String json = "{\n"
        + " \"name\":\"测11211试\",\n"
        + " \"startDate\":\"2019-09-01\",\n"
        + " \"endDate\":\"2019-12-01\",\n"
        + " \"sourceId\":\"测11211试\",\n"
        + "\"shape\":\"{\\\"type\\\":\\\"Polygon\\\",\\\"coordinates\\\":[[[116.47136049541452,39.911835455308186],[116.47107548726642,39.911786666774525],[116.47097519756515,39.91125241160223],[116.47005092517091,39.91123486048952],[116.47005187137883,39.91169184369403],[116.47004276796277,39.91226179448864],[116.47172875506763,39.91226346088692],[116.47174587803151,39.91176852951448],[116.47136049541452,39.911835455308186]]]}\",\n"
        + " \"tagIds\":[100001,100002]\n"
        + " }";

    String uri = "https://api-aone.jiguang.cn/api/v1/regions";
    HttpHeaders headers = new HttpHeaders();

    List<String> a = Arrays.asList("application/json", "charset=utf-8");
    headers.put(HttpHeaders.CONTENT_TYPE, a);
    headers.put("Authorization", Lists.newArrayList("Basic ZGVtbzpkZW1v"));
    final HttpEntity<String> entity = new HttpEntity<>(json, headers);

    final ResponseEntity<String> exchange = restTemplate.exchange(uri, HttpMethod.POST, entity, String.class);
    System.out.println(exchange.getBody());
  }
}
