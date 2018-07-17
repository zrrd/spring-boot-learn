package springboot.learn.springboot.model;

import com.baomidou.mybatisplus.activerecord.Model;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

/**
 * 游戏实体类
 *
 * @author win
 * @date 2018/6/30
 */
@Data
public class Game extends Model<Game> {

  private Integer id;

  private String name;

  private Double price;

  private Date publishDate;

  private Double score;

  private String image;

  @Override
  protected Serializable pkVal() {
    return id;
  }
}