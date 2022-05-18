package cn.learn.springboot;

import com.dtp.core.spring.EnableDynamicTp;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author shaoyijiong
 * @date 2021/2/23
 */
@EnableDynamicTp
@SpringBootApplication
public class DynamicTpApplication {

  public static void main(String[] args) {
    SpringApplication.run(DynamicTpApplication.class, args);
  }

}
