package cn.learn.springboot06datamybatis.mapper;

import cn.learn.springboot06datamybatis.bean.Game;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

/**
 * 指定这个是一个操作数据库的mapper.
 * 不注解@Mapper的话 使用mapperScan 批量扫描 @MapperScan(value = "cn.learn.springboot06datamybatis.mapper")
 *
 * @author shaoyijiong
 */
//@Mapper
public interface GameMapper {

  /**
   * 根据id查找game.
   *
   * @param id 游戏id
   * @return 游戏实体类
   */
  @Select("select * from game where id = #{id}")
  public Game getGameById(Integer id);

  @Delete("delete from game where id = #{id}")
  public int deleteGameById(Integer id);


  /**
   * Options 自增主键.
   */
  @Options(useGeneratedKeys = true,keyProperty = "id")
  @Insert("insert into game(name,price,publish_date,score) values(#{name},#{price},#{publishDate},"
      + "#{score})")
  public int insertGame(Game game);
}
