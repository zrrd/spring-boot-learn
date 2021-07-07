import cn.learn.springboot.Go;
import cn.learn.springboot.bean.Person;
import com.alibaba.fastjson.JSON;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
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
import org.springframework.expression.ParserContext;
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


  @Test
  public void testSimple() {
    // 解析器
    ExpressionParser parser = new SpelExpressionParser();
    // 上下文 (可选)
    EvaluationContext context = new StandardEvaluationContext();
    context.setVariable("hello", "world");
    // 表达式
    String expression = "#hello";
    Expression exp = parser.parseExpression(expression);
    // 上下文对象
    String value = exp.getValue(context, String.class);
    log.info(value);
  }


  ExpressionParser parser = new SpelExpressionParser();

  /**
   * 字面量
   */
  @Test
  public void test1() {
    // 字符串
    String str1 = parser.parseExpression("'Hello World!'").getValue(String.class);
    String str2 = parser.parseExpression("\"Hello World!\"").getValue(String.class);
    // 数字
    Integer int1 = parser.parseExpression("1").getValue(Integer.class);
    Long long1 = parser.parseExpression("-1L").getValue(Long.class);
    Float float1 = parser.parseExpression("1.1").getValue(Float.class);
    Double double1 = parser.parseExpression("1.1E+2").getValue(Double.class);
    // boolean类型
    Boolean true1 = parser.parseExpression("true").getValue(boolean.class);
    Boolean false1 = parser.parseExpression("false").getValue(boolean.class);
    // null 类型
    Object null1 = parser.parseExpression("null").getValue(Object.class);
    log.info("end");
  }

  /**
   * 运算表达式 支持加(+)、减(-)、乘(*)、除(/)、求余（%）、幂（^）运算
   */
  @Test
  public void test2() {
    Integer result1 = parser.parseExpression("1+2-3*4/2").getValue(Integer.class);//-3
    Integer result2 = parser.parseExpression("4%3").getValue(Integer.class);//1
    Integer result3 = parser.parseExpression("2^3").getValue(Integer.class);//8
    log.info("end");
  }

  /**
   * 关系表达式 等于（==）、不等于(!=)、大于(>)、大于等于(>=)、小于(<)、小于等于(<=)，区间（between）
   */
  @Test
  public void test3() {
    parser.parseExpression("1>2").getValue(Boolean.class);
    parser.parseExpression("1 between {1, 2}").getValue(Boolean.class);
  }

  /**
   * 逻辑表达式  支持 且（and）、或(or)、非(!或NOT)
   */
  @Test
  public void test4() {

    String expression1 = "2>1 and (!true or !false)";
    Boolean result1 = parser.parseExpression(expression1).getValue(Boolean.class);
    String expression2 = "2>1 and (NOT true or NOT false)";
    Boolean result2 = parser.parseExpression(expression2).getValue(Boolean.class);
    log.info("end");
  }

  /**
   * 对象
   */
  @Test
  public void test5() {
    Person person = new Person();
    person.setName("hello");
    person.setAge(23);
    // 设置根对象
    EvaluationContext context = new StandardEvaluationContext(person);
    // #root用于表示跟对象 下面两个句子等价
    //Expression expression = parser.parseExpression("name");
    Expression expression = parser.parseExpression("#root.name");
    String result = expression.getValue(context, String.class);
    log.info("testEntity result:{}", result);
  }

  /**
   * 列表
   */
  @Test
  public void test6() {
    Person person = new Person();
    person.setName("hello");
    person.setAge(23);
    List<Person> list = new ArrayList<>();
    list.add(person);
    // 设置根对象
    EvaluationContext context = new StandardEvaluationContext(list);
    // #root用于表示跟对象 下面两个句子等价
    //Expression expression = parser.parseExpression("[0].name");
    Expression expression = parser.parseExpression("#root[0].name");
    String result = expression.getValue(context, String.class);
    log.info("testEntity result:{}", result);
  }

  /**
   * map
   */
  @Test
  public void test7() {
    Person person = new Person();
    person.setName("hello");
    person.setAge(23);
    Map<String, Person> map = new HashMap<>();
    map.put("person", person);
    // 设置根对象
    EvaluationContext context = new StandardEvaluationContext(map);
    // #root用于表示跟对象 下面两个句子等价
    //Expression expression = parser.parseExpression("['person'].name");
    Expression expression = parser.parseExpression("#root['person'].name");
    String result = expression.getValue(context, String.class);
    log.info("testEntity result:{}", result);
  }


  /**
   * 内联列表 内联Map array构造
   */
  @Test
  public void test8() {
    // 内联数组
    List numbers = parser.parseExpression("{1,2,3,4}").getValue(List.class);
    List listOfLists = parser.parseExpression("{{'a','b'},{'x','y'}}").getValue(List.class);
    // 内联map
    Map inventorInfo = (Map) parser.parseExpression("{name:'Nikola',dob:'10-July-1856'}").getValue(Map.class);
    // array 构造
    int[] numbers1 = (int[]) parser.parseExpression("new int[4]").getValue();
    int[] numbers2 = (int[]) parser.parseExpression("new int[]{1,2,3}").getValue();
    int[][] numbers3 = (int[][]) parser.parseExpression("new int[4][5]").getValue();

  }

  /**
   * 方法调用
   */
  @Test
  public void test9() {
    // 调用String方法
    String c = parser.parseExpression("'abc'.substring(2, 3)").getValue(String.class);

    // 调用列表方法
    List<String> list = new ArrayList<>();
    list.add("a");
    list.add("b");
    // 设置根对象
    EvaluationContext context = new StandardEvaluationContext(list);
    Expression expression1 = parser.parseExpression("#root.size()");
    // 2
    Integer size = expression1.getValue(context, Integer.class);
    Expression expression2 = parser.parseExpression("#root.contains('a')");
    // true
    Boolean contains = expression2.getValue(context, Boolean.class);

    // 调用其他对象方法
    Person person = new Person();
    EvaluationContext context1 = new StandardEvaluationContext(person);
    String toString = parser.parseExpression("#root.toString()").getValue(context1, String.class);
    log.info("end");
  }

  @Test
  public void test10() {
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

  @Test
  public void test11() {
    // 类操作
    //java.lang包类访问
    Class stringClass = parser.parseExpression("T(String)").getValue(Class.class);
    //其他包类访问
    Class dateClass = parser.parseExpression("T(java.util.Date)").getValue(Class.class);
    //类静态字段访问
    Integer result3 = parser.parseExpression("T(Integer).MAX_VALUE").getValue(Integer.class);
    //类静态方法调用
    Integer result4 = parser.parseExpression("T(Integer).parseInt('1')").getValue(Integer.class);

    // 实例化
    String newString = parser.parseExpression("new String('haha')").getValue(String.class);

    // instanceof
    parser.parseExpression("'haha' instanceof T(String) ").getValue(Boolean.class);

  }

  /**
   * 上下文变量
   */
  @Test
  public void test12() {
    Person person = new Person();
    person.setName("hello");
    person.setAge(23);
    List<Person> list = new ArrayList<>();
    list.add(person);
    // 设置根对象
    EvaluationContext context = new StandardEvaluationContext(list);
    context.setVariable("name", "hello");
    // 指向上下文变量
    String name = parser.parseExpression("#name").getValue(context, String.class);
    // 指向根节点对象
    List<Person> person1 = parser.parseExpression("#root").getValue(context, List.class);
    // 指向当前上下文对象 其实并没有啥用
    List list1 = parser.parseExpression("#root.?[#this.age == 23]").getValue(context, List.class);
    List list2 = parser.parseExpression("#root.?[age == 23]").getValue(context, List.class);
    log.info("end");
  }


  @Autowired
  ApplicationContext applicationContext;

  /**
   * spring bean 对象
   */
  @Test
  public void test13() {
    ExpressionParser parser = new SpelExpressionParser();
    //Spring 环境下注入
    StandardEvaluationContext sec = new StandardEvaluationContext();
    sec.setBeanResolver(new BeanFactoryResolver(applicationContext));
    // 获取spring上下文中的bean person
    Object bean = parser.parseExpression("@person").getValue(sec);
    log.info("testBean bean:{}", JSON.toJSONString(bean));
  }

  /**
   * 三元表达式  Elvis操作符 安全导航运算符
   */
  @Test
  public void test14() {
    // 三元运算符
    String falseString = parser.parseExpression("false ? 'trueExp' : 'falseExp'").getValue(String.class);
    // Elvis 操作符号
    // 判断是否为空 , 为空返回后面的 否则返回当前
    // name!= null?name:"Unknown" <> name?:"Unknown"
    StandardEvaluationContext context = new StandardEvaluationContext();
    context.setVariable("name", null);
    String name = parser.parseExpression("#name?:'hello'").getValue(context, String.class);
    // 安全导航运算符
    Person person = new Person();
    context.setVariable("person", null);
    String name1 = parser.parseExpression("#person?.name").getValue(context, String.class);
    //String name1 = parser.parseExpression("#person.name").getValue(context, String.class);
    log.info("end");
  }

  /**
   * 集合选择器
   */
  @Test
  public void test15() {
    List<Integer> list = new ArrayList<>();
    list.add(1);
    list.add(2);
    list.add(3);
    StandardEvaluationContext context = new StandardEvaluationContext(list);
    List<Integer> aftetList = parser.parseExpression("#root.?[#this>1]").getValue(context, List.class);
    // 获取第一个匹配项
    Integer first = parser.parseExpression("#root.^[#this>1]").getValue(context, Integer.class);
    // 获取最后一个匹配项
    Integer last = parser.parseExpression("#root.$[#this>1]").getValue(context, Integer.class);
    log.info("end");
  }

  /**
   * 表达模板
   */

  @Test
  public void test16() {
    List<Person> list = new ArrayList<>();
    Person p1 = new Person();
    p1.setName("hello1");
    p1.setAge(23);
    Person p2 = new Person();
    p2.setName("hello2");
    p2.setAge(23);
    list.add(p1);
    list.add(p2);
    StandardEvaluationContext context = new StandardEvaluationContext(list);
    List<String> value = parser.parseExpression("#root.![name]").getValue(context, List.class);
    log.info("end");
  }

  @Test
  public void test17() {
    // #{dss} dd #{}
    class TemplateParserContext implements ParserContext {

      public String getExpressionPrefix() {
        return "#{";
      }

      public String getExpressionSuffix() {
        return "}";
      }

      public boolean isTemplate() {
        return true;
      }
    }
    List<Person> list = new ArrayList<>();
    Person p1 = new Person();
    p1.setName("hello1");
    p1.setAge(23);
    Person p2 = new Person();
    p2.setName("hello2");
    p2.setAge(23);
    list.add(p1);
    list.add(p2);
    StandardEvaluationContext context = new StandardEvaluationContext(list);
    String value = parser.parseExpression(
        "'第一个人为'+#root[0].name+'第二个人为'+#root[1].name").getValue(context,String.class);
    log.info("end");
  }

  /**
   * SpEL 数字 => 8
   */
  @Test
  public void testNumeric() {
    ExpressionParser parser = new SpelExpressionParser();
    Expression expression = parser.parseExpression("6+2");
    Integer result = expression.getValue(Integer.class);
    log.info("testNumeric result:{}", result);
  }

  /**
   * SpEL 字符串 => SpEL thinking
   */
  @Test
  public void testString() {
    ExpressionParser parser = new SpelExpressionParser();
    Expression expression = parser.parseExpression("'SpEL'.concat(' thinking')");
    String result = expression.getValue(String.class);
    log.info("testString result:{}", result);
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
   * spring bean 环境获取bean
   */
  @Test
  public void testBean() {
    ExpressionParser parser = new SpelExpressionParser();
    //Spring 环境下注入
    StandardEvaluationContext sec = new StandardEvaluationContext();
    sec.setBeanResolver(new BeanFactoryResolver(applicationContext));
    // 获取spring上下文中的bean person
    Object bean = parser.parseExpression("@person").getValue(sec);
    log.info("testBean bean:{}", JSON.toJSONString(bean));
  }


  /**
   * 对象解析 二级 => hello
   */
  @Test
  public void testBeanProperties() {
    @Data
    class PersonWapper {

      Person person;
    }
    Person user = new Person();
    user.setName("hello");
    user.setAge(23);
    PersonWapper userWapper = new PersonWapper();
    userWapper.setPerson(user);
    EvaluationContext context = new StandardEvaluationContext(userWapper);
    ExpressionParser parser = new SpelExpressionParser();
    Expression expression = parser.parseExpression("person.name");
    String result = expression.getValue(context, String.class);
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

  @Test
  public void a() {
    @Data
    class PersonWapper {

      Person person;
      List<Person> personList;
    }
    Person user = new Person();
    user.setName("hello");
    user.setAge(23);
    PersonWapper userWapper = new PersonWapper();
    userWapper.setPerson(user);
    List<Person> list = new ArrayList<>();
    list.add(user);
    Person user1 = new Person();
    user.setName("hello");
    user.setAge(231);
    list.add(user1);
    userWapper.setPersonList(list);
    EvaluationContext context = new StandardEvaluationContext(userWapper);
    ExpressionParser parser = new SpelExpressionParser();
    Expression expression = parser.parseExpression("personList.![age]");
    Set result = expression.getValue(context, Set.class);
    log.info("testBeanProperties result:{}", result);
  }

  @Test
  public void b() {
    StandardEvaluationContext sec = new StandardEvaluationContext();
    sec.setVariable("","");
    String value = parser.parseExpression("#orgId").getValue(sec, String.class);
  }
}
