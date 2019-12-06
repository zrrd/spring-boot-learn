package cn.learn.springboot.bean;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Data;

/**
 * @author shaoyijiong
 * @date 2019/12/6
 */
@Data
public class Game {

  private Integer id;
  private String name;
  private BigDecimal price;
  private LocalDate publishDate;
  private Double score;
  private String image;
  private LocalDateTime updateTime;
}
