package cn.learn.springboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * 用Swagger2构建强大的Restful API文档.
 *
 * @author shaoyijiong
 * @date 2018/7/26
 */
@Configuration
@EnableSwagger2
public class Swagger2Config {

  @Bean
  public Docket createRestApi() {
    return new Docket(DocumentationType.SWAGGER_2)
        .apiInfo(apiInfo())
        .select()
        .apis(RequestHandlerSelectors.basePackage("cn.learn.springbootswagger2.controller"))
        .paths(PathSelectors.any())
        .build();
  }

  private ApiInfo apiInfo() {
    return new ApiInfoBuilder()
        .title("Spring Boot中使用Swagger2构建RESTful APIs")
        .description("自动构建RestFul api")
        .termsOfServiceUrl("https://github.com/zrrd")
        .contact("邵益炯")
        .version("1.0")
        .build();
  }
}
