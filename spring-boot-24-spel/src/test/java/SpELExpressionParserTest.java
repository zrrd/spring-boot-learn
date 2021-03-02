import cn.learn.springboot.Go;
import cn.learn.springboot.bean.Person;
import com.alibaba.fastjson.JSON;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.context.expression.BeanFactoryResolver;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author shaoyijiong
 * @date 2021/2/25
 */
@Slf4j
//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = Go.class)
public class SpELExpressionParserTest {

  /**
   * SpEL 数字 => 8
   */
  @Test
  public void testNumeric() {
    ExpressionParser parser = new SpelExpressionParser();
    Expression expression = parser.parseExpression("6+2");
    Integer result = (Integer) expression.getValue();
    log.info("testNumeric result:{}", result);
  }

  /**
   * SpEL 字符串 => SpEL thinking
   */
  @Test
  public void testString() {
    ExpressionParser parser = new SpelExpressionParser();
    Expression expression = parser.parseExpression("'SpEL'.concat(' thinking')");
    String result = (String) expression.getValue();
    log.info("testString result:{}", result);
  }


  /**
   * SpEL 对象 => hello
   */
  @Test
  public void testEntity() {
    Person person = new Person();
    person.setName("hello");
    person.setAge(23);
    ExpressionParser parser = new SpelExpressionParser();
    EvaluationContext context = new StandardEvaluationContext(person);
    Expression expression = parser.parseExpression("name");
    String result = expression.getValue(context, String.class);
    log.info("testEntity result:{}", result);
  }

  /**
   * SpEL 修改数据 => false
   */
  @Test
  public void testTypeConversion() {
    class Simple {

      public List<Boolean> booleanList = new ArrayList<>();
    }
    Simple simple = new Simple();
    simple.booleanList.add(true);
    // 对象上下文
    StandardEvaluationContext simpleContext = new StandardEvaluationContext(simple);
    ExpressionParser parser = new SpelExpressionParser();
    // false is passed in here as a string.  SpEL and the conversion service will
    // correctly recognize that it needs to be a Boolean and convert it
    parser.parseExpression("booleanList[0]").setValue(simpleContext, "false");
    // b will be false
    Boolean b = simple.booleanList.get(0);
    log.info("testTypeConversion result:{}", b);
  }


  /**
   * 上下文值 => hello
   */
  @Test
  public void testValue() {
    ExpressionParser parser = new SpelExpressionParser();
    EvaluationContext context = new StandardEvaluationContext();
    context.setVariable("name", "hello");
    Expression expression = parser.parseExpression("#name");
    String result = expression.getValue(context, String.class);
    log.info("testValue result:{}", result);
  }

  /**
   * spring 上下文
   */
  @Autowired
  ApplicationContext applicationContext;

  /**
   * spring bean 环境获取bean
   */
  @Test
  public void testBean() {
    ExpressionParser parser = new SpelExpressionParser();
    //Spring 环境下注入
    StandardEvaluationContext  sec = new StandardEvaluationContext(applicationContext);
    sec.setBeanResolver(new BeanFactoryResolver(applicationContext));
    // 获取spring上下文中的bean person
    Object bean = parser.parseExpression("@person").getValue(sec);
    log.info("testBean bean:{}", JSON.toJSONString(bean));
  }


  /**
   * 对象解析 二级 => hello
   */
  @Test
  public void testBeanProperties(){
    @Data
    class PersonWapper {
      Person person;
    }
    Person user = new Person();
    user.setName("hello");
    user.setAge(23);
    PersonWapper userWapper = new PersonWapper();
    userWapper.setPerson(user);
    EvaluationContext context=new StandardEvaluationContext(userWapper);
    ExpressionParser parser = new SpelExpressionParser();
    Expression expression = parser.parseExpression("person.name");
    String result = expression.getValue(context,String.class);
    log.info("testBeanProperties result:{}", result);
  }


  private static final Pattern pattern = Pattern.compile("\\{.*?}");


  @Test
  public void match() {
    String log = "你好啊{#p.name},年龄{#p.age},养了一只{#c.category}的猫";
    Matcher matcher = pattern.matcher(log);
    while (matcher.find()) {
      System.out.println(matcher.group());
    }
  }
}
