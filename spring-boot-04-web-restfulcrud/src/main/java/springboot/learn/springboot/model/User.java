package springboot.learn.springboot.model;

import com.baomidou.mybatisplus.activerecord.Model;
import java.io.Serializable;
import lombok.Data;

/**
 * 用户实体类
 *
 * @author win
 * @date 2018-6-30
 */
@Data
public class User extends Model<User>{

  private Integer id;

  private String name;

  private Integer gameNum;

  private Double money;

  private String prefer;

  @Override
  protected Serializable pkVal() {
    return id;
  }
}