package cn.learn.springboot.model;

import com.baomidou.mybatisplus.extension.activerecord.Model;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;

/**
 * 游戏实体类.
 *
 * @author win
 * @date 2018/6/30
 */
@Getter
@Setter
public class Game extends Model<Game> {

  private Integer id;

  private String name;

  private Double price;

  private Date publishDate;

  private Double score;

  private String image;

  public Game() {
  }

  public Game(Integer id) {
    this.id = id;
  }
}