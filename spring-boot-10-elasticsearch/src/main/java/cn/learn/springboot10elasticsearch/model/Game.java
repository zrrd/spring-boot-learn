package cn.learn.springboot10elasticsearch.model;

import io.searchbox.annotations.JestId;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 游戏表.
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
@Data
public class Game implements Serializable {

  /**
   * 标识主键.
   */
  @JestId
  private Integer id;
  private String name;
  private Double price;
  private Date publishDate;
  private Double score;
  private String image;

  public Game(Integer id, String name, Double price, Date publishDate, Double score,
      String image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.publishDate = publishDate;
    this.score = score;
    this.image = image;
  }
}
