package cn.learn.springboot;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Random;
import javax.sql.DataSource;
import org.apache.commons.lang3.RandomUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DataJdbcTests {

  @Autowired
  DataSource dataSource;

  @Test
  public void contextLoads() throws SQLException {
    System.out.println(dataSource.getClass());
    Connection connection = dataSource.getConnection();
    System.out.println(connection);
  }

  @Autowired
  private JdbcTemplate jdbcTemplate;

  @Test
  @Commit
  public void insert() {
    for (int i = 0; i < 100000L; i++) {
      int comId = RandomUtils.nextInt(1, 1000);
      jdbcTemplate.execute("INSERT INTO fengqu VALUES (NULL ," +comId+")");
      //System.out.println(comId);
    }
  }

}
