package springboot.learn.springboot.model;

import com.baomidou.mybatisplus.activerecord.Model;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;


/**.
 * steam实体类
 *
 * @author win
 * @date 2018-6-30
 */
@Data
public class Steam extends Model<Steam> {

  private Integer id;

  private Integer gameId;

  private Integer userId;

  private Date createTime;


  @Override
  protected Serializable pkVal() {
    return id;
  }
}