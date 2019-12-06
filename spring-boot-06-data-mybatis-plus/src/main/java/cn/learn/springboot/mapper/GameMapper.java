package cn.learn.springboot.mapper;

import cn.learn.springboot.bean.Game;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * @author shaoyijiong
 * @date 2019/12/6
 */
public interface GameMapper extends BaseMapper<Game> {

  @Select("select * from game where name = #{name}")
  List<Game> selectByName(@Param("name") String name);

  @Select("select * from game where publish_date = #{date}")
  List<Game> selectByPublishDate(@Param("date") LocalDate localDate);

  @Select("select * from game where update_time between #{startTime} AND #{endTime}")
  List<Game> selectByUpdateTime(@Param("startTime") LocalDateTime startTime, @Param("endTime") LocalDateTime endTime);
}
