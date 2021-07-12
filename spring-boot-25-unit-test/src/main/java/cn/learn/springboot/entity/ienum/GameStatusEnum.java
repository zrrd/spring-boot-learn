package cn.learn.springboot.entity.ienum;

import com.baomidou.mybatisplus.annotation.IEnum;

/**
 * @author shaoyijiong
 * @date 2021/7/12
 */
public enum GameStatusEnum implements IEnum<Integer> {
  /**
   * 在售
   */
  ON_SALE(1),
  /**
   * 删除
   */
  DELETED(9),
  /**
   * 未发售
   */
  UN_SALE(0);

  private final Integer value;

  GameStatusEnum(Integer value) {
    this.value = value;
  }

  @Override
  public Integer getValue() {
    return value;
  }
}
