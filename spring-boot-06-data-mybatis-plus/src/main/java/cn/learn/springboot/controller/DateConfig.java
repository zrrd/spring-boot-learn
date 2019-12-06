package cn.learn.springboot.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;

/**
 * @author shaoyijiong
 * @date 2019/12/6
 */
@Configuration
public class DateConfig {

  /**
   * LocalDate 入参格式化
   */
  @Bean
  public Converter<String, LocalDate> localDateConverter() {
    return new Converter<String, LocalDate>() {
      @Override
      public LocalDate convert(String source) {
        return LocalDate.parse(source, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
      }
    };
  }

  /**
   * LocalDateTime 入参格式化
   */
  @Bean
  public Converter<String, LocalDateTime> localDateTimeConverter() {
    return new Converter<String, LocalDateTime>() {
      @Override
      public LocalDateTime convert(String source) {
        return LocalDateTime.parse(source, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
      }
    };
  }

}
