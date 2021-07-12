package cn.learn.springboot.entity.ienum;

import com.baomidou.mybatisplus.annotation.IEnum;

/**
 * @author shaoyijiong
 * @date 2021/7/12
 */
public enum GameTypeEnum implements IEnum<String> {
  /**
   * rpg类型
   */
  RPG("rpg"),
  /**
   * 动作
   */
  ACTION("action"),
  /**
   * 射击游戏
   */
  SHOOTER("shooter"),
  /**
   * 其他
   */
  OTHER("other");

  private final String value;

  GameTypeEnum(String value) {
    this.value = value;
  }

  @Override
  public String getValue() {
    return value;
  }
}
