package cn.learn.springboot.mapper;

import cn.learn.springboot.bean.Game;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

/**
 * 指定这个是一个操作数据库的mapper. 不注解@Mapper的话 使用mapperScan 批量扫描 @MapperScan(value = "cn.learn.springboot.mapper")
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
   * 删除游戏.
   *
   * @param id 游戏id
   * @return 删除结果
   */
  @Delete("delete from game where id = #{id}")
  int deleteGameById(Integer id);


  /**
   * Options 自增主键.
   *
   * @param game 游戏实体
   * @return 插入结果
   */
  @Options(useGeneratedKeys = true, keyProperty = "id")
  @Insert("insert into game(name,price,publish_date,score) values(#{name},#{price},#{publishDate},"
      + "#{score})")
  int insertGame(Game game);
}
