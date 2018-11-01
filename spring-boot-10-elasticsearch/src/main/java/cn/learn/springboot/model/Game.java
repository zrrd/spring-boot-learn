package cn.learn.springboot.model;

import io.searchbox.annotations.JestId;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import org.springframework.data.elasticsearch.annotations.Document;

/**
 * 游戏表. @Document SpringData的注解
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
@Data
@Document(indexName = "game_party",type = "game")
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
