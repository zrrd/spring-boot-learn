package cn.learn.springboot.entity;

import com.baomidou.mybatisplus.extension.activerecord.Model;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @author shaoyijiong
 * @date 2021/7/12
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class Steam extends Model<Steam> {

  private Integer id;
  /**
   * 游戏id
   */
  private Integer gameId;
  /**
   * 用户id
   */
  private Integer userId;
  /**
   * 创建时间
   */
  private LocalDateTime createTime;

}
