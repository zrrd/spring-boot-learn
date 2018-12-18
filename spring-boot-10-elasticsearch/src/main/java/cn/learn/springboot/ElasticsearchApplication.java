package cn.learn.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.elasticsearch.jest.JestAutoConfiguration;

/**
 * .
 *
 * @author shaoyijiong
 */
@SpringBootApplication(exclude = JestAutoConfiguration.class)
public class ElasticsearchApplication {

  public static void main(String[] args) {
    SpringApplication.run(ElasticsearchApplication.class, args);
  }
}
