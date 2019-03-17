package cn.learn.springboot.handler;

import cn.learn.springboot.bean.Detail;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;
import org.apache.ibatis.type.MappedTypes;

/**
 * MappedJdbcTypes 和 MappedTypes 可以不用写 自动推断
 *
 * @author shaoyijiong
 * @date 2019/3/15
 */
//@MappedJdbcTypes(JdbcType.VARCHAR)
//@MappedTypes(List.class)
@Slf4j
public class JsonHandler extends BaseTypeHandler<List<Detail>> {

  private static final ObjectMapper MAPPER = new ObjectMapper();

  /**
   * json序列化
   */
  private List<Detail> handler(String json) throws SQLException {
    if (json == null || "".equals(json)) {
      return null;
    }
    try {
      return MAPPER.readValue(json, new TypeReference<List<Detail>>() {
      });
    } catch (IOException e) {
      log.error("json序列化失败", e);
      throw new SQLException();
    }
  }


  @Override
  public void setNonNullParameter(PreparedStatement preparedStatement, int i, List<Detail> details,
      JdbcType jdbcType) throws SQLException {

  }

  @Override
  public List<Detail> getNullableResult(ResultSet rs, String s) throws SQLException {
    String jsonString = rs.getString(s);
    return handler(jsonString);
  }

  @Override
  public List<Detail> getNullableResult(ResultSet rs, int i) throws SQLException {
    String jsonString = rs.getString(i);
    return handler(jsonString);
  }

  @Override
  public List<Detail> getNullableResult(CallableStatement cs, int i) throws SQLException {
    String jsonString = cs.getString(i);
    return handler(jsonString);
  }
}
