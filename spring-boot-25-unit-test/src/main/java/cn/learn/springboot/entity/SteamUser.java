package cn.learn.springboot.entity;

import cn.learn.springboot.entity.ienum.GameTypeEnum;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import java.math.BigDecimal;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * stream用户
 *
 * @author shaoyijiong
 * @date 2021/7/12
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class SteamUser extends Model<SteamUser> {

  private Integer id;
  /**
   * 用户名
   */
  private String name;
  /**
   * 游戏数量
   */
  private Integer gameNum;
  /**
   * 用户余额
   */
  private BigDecimal money;
  /**
   * 喜欢的游戏类型
   */
  private GameTypeEnum prefer;

}
