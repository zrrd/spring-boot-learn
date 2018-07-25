package cn.learn.cache.bean;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 游戏表.
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
@Getter
@Setter
@ToString
public class Game {

  private Integer id;
  private String name;
  private Double price;
  private Date publishDate;
  private Double score;
  private String image;
}
