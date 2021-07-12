package cn.learn.springboot.web;

import com.github.pagehelper.PageRowBounds;
import lombok.Data;
import org.apache.ibatis.session.RowBounds;

/**
 * 页面请求
 *
 * @author shaoyijiong
 * @date 2020/6/5
 */
@Data
public class BasePageReq {

  /**
   * 每页数量
   */
  private Integer pageSize = 10;
  /**
   * 页码
   */
  private Integer pageNum = 1;

  /**
   * 小于等于0从第一页开始
   */
  public void setPageNum(int pageNum) {
    if (pageNum > 0) {
      this.pageNum = pageNum;
    } else {
      this.pageNum = 1;
    }
  }

  /**
   * 封装 pagehelper
   */
  public RowBounds buildRowBounds() {
    return new PageRowBounds((pageNum - 1) * pageSize, pageSize);
  }
}
