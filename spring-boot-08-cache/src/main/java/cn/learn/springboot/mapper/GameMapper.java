package cn.learn.springboot.mapper;

import cn.learn.springboot.bean.Game;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

/**
 * 指定这个是一个操作数据库的mapper. 不注解@Mapper的话 使用mapperScan 批量扫描 @MapperScan(value =
 * "cn.learn.springboot06datamybatis.mapper")
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
  Game getGameById(Integer id);

  /**
   * 根据id删游戏.
   *
   * @param id 游戏id
   * @return 删除是否成功
   */
  @Delete("delete from game where id = #{id}")
  int deleteGameById(Integer id);

  /**
   * 更新游戏.
   *
   * @param game 游戏实体类
   * @return 游戏更新是否成功
   */
  @Update("update game set name = #{name},price = #{price},publish_date=#{publishDate},"
      + "score=#{score},image=#{image} where id=#{id}")
  int updateGame(Game game);

  /**
   * Options 自增主键.
   *
   * @param game 游戏实体类
   * @return 游戏插入是否成功
   */
  @Options(useGeneratedKeys = true, keyProperty = "id")
  @Insert("insert into game(name,price,publish_date,score) values(#{name},#{price},#{publishDate},"
      + "#{score})")
  int insertGame(Game game);

  /**
   * 根据name查询游戏.
   *
   * @param name 游戏名
   * @return 游戏实体类
   */
  @Select("select * from game where name = #{name}")
  Game getGameByName(String name);

  /**
   * 根据score查询游戏.
   *
   * @param score 游戏评分
   * @return 游戏
   */
  @Select("select * from game where score = #{score}")
  Game getGameByScore(Double score);

}
