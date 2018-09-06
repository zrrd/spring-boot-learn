package cn.learn.cache.bean;

import java.io.Serializable;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * 游戏表.
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Game {

  private Integer id;
  private String name;
  private Double price;
  private Date publishDate;
  private Double score;
  private String image;
}
