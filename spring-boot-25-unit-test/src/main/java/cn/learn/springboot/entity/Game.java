package cn.learn.springboot.entity;

import cn.learn.springboot.entity.ienum.GameStatusEnum;
import cn.learn.springboot.entity.ienum.GameTypeEnum;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @author shaoyijiong
 * @date 2019/12/6
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class Game extends Model<Game> {

  private Integer id;
  /**
   * 游戏名 not null
   */
  private String name;
  /**
   * 价格 小数后两位
   */
  private BigDecimal price;
  /**
   * 发售日期
   */
  private LocalDate publishDate;
  /**
   * 游戏评分
   */
  private Double score;
  /**
   * 游戏封面
   */
  private String image;
  /**
   * 游戏类型
   */
  private GameTypeEnum type;
  /**
   * 游戏状态
   */
  private GameStatusEnum status;
  /**
   * 更新日期
   */
  private LocalDateTime updateTime;
}
