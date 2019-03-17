package cn.learn.springboot.bean;


import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author shaoyijiong
 * @date 2019/3/15
 */
@Data
@NoArgsConstructor
public class GameDetail {

  private Integer id;
  private List<Detail> detail;

  public GameDetail(Integer id) {
    this.id = id;
  }
}
