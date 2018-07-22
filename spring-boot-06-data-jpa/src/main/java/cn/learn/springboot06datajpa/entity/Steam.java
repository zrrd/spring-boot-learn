package cn.learn.springboot06datajpa.entity;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;


/**
 * steam实体类.
 *
 * @author win
 * @date 2018-6-30
 */
@Getter
@Setter
public class Steam {

  private Integer id;
  private Integer gameId;
  private Integer userId;
  private Date createTime;

}