package cn.learn.springboot.log;

import org.springframework.expression.ParserContext;

/**
 * @author shaoyijiong
 * @date 2021/5/25
 */
public class TemplateParserContext implements ParserContext {

  @Override
  public String getExpressionPrefix() {
    return "#{";
  }
  
  @Override
  public String getExpressionSuffix() {
    return "}";
  }

  @Override
  public boolean isTemplate() {
    return true;
  }
}
