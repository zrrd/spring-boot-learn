package cn.learn.springboot.condition;

import javax.sql.DataSource;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;

/**
 * @author shaoyijiong
 * @date 2019/3/6
 */
public class DbConfig {

  /**
   * DataBaseConditional 当满足 DataBaseConditional的时候装配
   */
  @Bean
  @Conditional(DataBaseConditional.class)
  public DataSource dataSource() {
    return new BasicDataSource();
  }
}
