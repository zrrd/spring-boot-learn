package cn.learn.springboot06datajpa.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 * 游戏表.使用jpa注解配置映射关系
 *
 * @author shaoyijiong
 * @date 2018/7/22
 */
@Getter
@Setter
@Entity
@Table(name = "game")
public class Game {

  /**
   * id和自增主键.
   */
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column
  private String name;

  @Column
  private Double price;

  @Column(name = "publish_date")
  private Date publishDate;

  @Column
  private Double score;

  @Column
  private String image;
}
