package cn.learn.springboot.bean;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
