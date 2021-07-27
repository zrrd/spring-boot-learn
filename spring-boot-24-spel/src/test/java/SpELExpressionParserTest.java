import cn.learn.springboot.Go;
import cn.learn.springboot.bean.Person;
import com.alibaba.fastjson.JSON;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Go.class)
public class SpELExpressionParserTest {


  /**
   * 关键api
   */
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
    System.out.println(value);
  }


  /**
   * 字面量
   */
  @Test
  public void test1() {
    ExpressionParser parser = new SpelExpressionParser();
    // 字符串
    String strVal1 = parser.parseExpression("'Hello World!'").getValue(String.class);
    String strVal2 = parser.parseExpression("\"Hello World!\"").getValue(String.class);
    String strVal3 = parser.parseExpression("'SpEL'.concat(' thinking')").getValue(String.class);
    System.out.println(strVal1);
    System.out.println(strVal2);
    System.out.println(strVal3);
    // 数字
    Integer intVal = parser.parseExpression("1").getValue(Integer.class);
    Long longVal = parser.parseExpression("-1L").getValue(Long.class);
    Float floatVal = parser.parseExpression("1.1").getValue(Float.class);
    Double doubleVal = parser.parseExpression("1.1E+2").getValue(Double.class);
    System.out.println(intVal);
    System.out.println(longVal);
    System.out.println(floatVal);
    System.out.println(doubleVal);
    // boolean类型
    Boolean trueVal = parser.parseExpression("true").getValue(boolean.class);
    Boolean falseVal = parser.parseExpression("false").getValue(boolean.class);
    System.out.println(trueVal);
    System.out.println(falseVal);
    // null 类型
    Object nullVal = parser.parseExpression("null").getValue(Object.class);
    System.out.println(nullVal);
  }

  /**
   * 运算表达式 支持加(+)、减(-)、乘(*)、除(/)、求余(%)、幂(^)运算
   */
  @Test
  public void test2() {
    ExpressionParser parser = new SpelExpressionParser();
    Integer result1 = parser.parseExpression("1+2-3*4/2").getValue(Integer.class);//-3
    Integer result2 = parser.parseExpression("4%3").getValue(Integer.class);//1
    Integer result3 = parser.parseExpression("2^3").getValue(Integer.class);//8
    System.out.println(result1);
    System.out.println(result2);
    System.out.println(result3);
  }

  /**
   * 关系表达式 等于(==)、不等于(!=)、大于(>)、大于等于(>=)、小于(<)、小于等于(<=)，区间(between)
   */
  @Test
  public void test3() {
    ExpressionParser parser = new SpelExpressionParser();
    Boolean booleanVal1 = parser.parseExpression("1>2").getValue(Boolean.class);
    Boolean booleanVal2 = parser.parseExpression("1 between {1, 2}").getValue(Boolean.class);
    System.out.println(booleanVal1);
    System.out.println(booleanVal2);
  }

  /**
   * 逻辑表达式  支持 且(and)、或(or)、非(!或NOT)
   */
  @Test
  public void test4() {
    ExpressionParser parser = new SpelExpressionParser();
    String expression1 = "2>1 and (!true or !false)";
    Boolean result1 = parser.parseExpression(expression1).getValue(Boolean.class);
    String expression2 = "2>1 and (NOT true or NOT false)";
    Boolean result2 = parser.parseExpression(expression2).getValue(Boolean.class);
    System.out.println(result1);
    System.out.println(result2);
  }

  /**
   * 对象
   */
  @Test
  public void test5() {
    ExpressionParser parser = new SpelExpressionParser();
    // 定义对象
    Person person = new Person();
    person.setName("hello");
    person.setAge(23);
    // 设置根对象
    EvaluationContext context = new StandardEvaluationContext(person);
    // #root用于表示跟对象 下面两个句子等价
    //Expression expression = parser.parseExpression("name");
    Expression expression = parser.parseExpression("#root.name");
    String result = expression.getValue(context, String.class);
    System.out.println(result);
  }

  /**
   * 列表
   */
  @Test
  public void test6() {
    ExpressionParser parser = new SpelExpressionParser();
    // 定义列表
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
    System.out.println(result);
  }

  /**
   * map
   */
  @Test
  public void test7() {
    ExpressionParser parser = new SpelExpressionParser();
    // 定义map
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
    System.out.println(result);
  }


  /**
   * 内联列表 内联Map array构造
   */
  @Test
  public void test8() {
    ExpressionParser parser = new SpelExpressionParser();
    // 内联数组
    List<Integer> numList = parser.parseExpression("{1,2,3,4}").getValue(List.class);
    List<List<String>> listOfLists = parser.parseExpression("{{'a','b'},{'x','y'}}").getValue(List.class);
    // 内联map
    Map<String, String> map = parser.parseExpression("{name:'Nikola',dob:'10-July-1856'}").getValue(Map.class);
    // array 构造
    int[] numArray1 = (int[]) parser.parseExpression("new int[4]").getValue();
    int[] numArray2 = (int[]) parser.parseExpression("new int[]{1,2,3}").getValue();
    int[][] numArray3 = (int[][]) parser.parseExpression("new int[4][5]").getValue();
    System.out.println(numList);
    System.out.println(listOfLists);
    System.out.println(Arrays.toString(numArray1));
    System.out.println(Arrays.toString(numArray2));
    System.out.println(Arrays.toString(numArray3));
  }

  /**
   * 方法调用
   */
  @Test
  public void test9() {
    ExpressionParser parser = new SpelExpressionParser();
    // 调用String方法
    String substring = parser.parseExpression("'abc'.substring(2, 3)").getValue(String.class);
    System.out.println(substring);
    // 调用列表方法
    List<String> list = new ArrayList<>();
    list.add("a");
    list.add("b");
    // 设置根对象
    EvaluationContext context = new StandardEvaluationContext(list);
    Expression expression1 = parser.parseExpression("#root.size()");
    // 2
    Integer size = expression1.getValue(context, Integer.class);
    System.out.println(size);
    Expression expression2 = parser.parseExpression("#root.contains('a')");
    // true
    Boolean contains = expression2.getValue(context, Boolean.class);
    System.out.println(contains);

    // 调用其他对象方法
    Person person = new Person();
    EvaluationContext context1 = new StandardEvaluationContext(person);
    String toString = parser.parseExpression("#root.toString()").getValue(context1, String.class);
    System.out.println(toString);
  }

  /**
   * 赋值操作
   */
  @Test
  public void test10() {
    class Simple {

      public final List<Boolean> booleanList = new ArrayList<>();
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
    Boolean booleanVal = simple.booleanList.get(0);
    System.out.println(booleanVal);
  }

  /**
   * 类表达式
   */
  @Test
  public void test11() {
    ExpressionParser parser = new SpelExpressionParser();
    // 类操作
    // java.lang包类访问
    Class stringClass = parser.parseExpression("T(String)").getValue(Class.class);
    System.out.println(stringClass);
    // 其他包类访问
    Class dateClass = parser.parseExpression("T(java.util.Date)").getValue(Class.class);
    System.out.println(dateClass);
    // 类静态字段访问
    Integer staticField = parser.parseExpression("T(Integer).MAX_VALUE").getValue(Integer.class);
    System.out.println(staticField);
    // 类静态方法调用
    Integer staticMethod = parser.parseExpression("T(Integer).parseInt('1')").getValue(Integer.class);
    System.out.println(staticMethod);
    // 实例化
    String newString = parser.parseExpression("new String('haha')").getValue(String.class);
    System.out.println(newString);
    // instanceof
    Boolean instanceofVal = parser.parseExpression("'haha' instanceof T(String) ").getValue(Boolean.class);
    System.out.println(instanceofVal);
  }

  /**
   * 上下文变量
   */
  @Test
  public void test12() {
    ExpressionParser parser = new SpelExpressionParser();
    Person person = new Person();
    person.setName("hello");
    person.setAge(23);
    List<Person> list = new ArrayList<>();
    list.add(person);
    // 设置根对象
    EvaluationContext context = new StandardEvaluationContext(list);
    // 设置上下文变量
    context.setVariable("name", "hello");
    // 指向上下文变量
    String name = parser.parseExpression("#name").getValue(context, String.class);
    System.out.println(name);
    // 指向根节点对象
    List<Person> personVal = parser.parseExpression("#root").getValue(context, List.class);
    System.out.println(personVal);
    // 指向当前上下文对象 其实并没有啥用
    List<Person> list1 = parser.parseExpression("#root.?[#this.age == 23]").getValue(context, List.class);
    List<Person> list2 = parser.parseExpression("#root.?[age == 23]").getValue(context, List.class);
    System.out.println(list1);
    System.out.println(list2);
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
    System.out.println(JSON.toJSONString(bean));
  }

  /**
   * 三元表达式  Elvis操作符 安全导航运算符
   */
  @Test
  public void test14() {
    ExpressionParser parser = new SpelExpressionParser();
    // 三元运算符
    String falseString = parser.parseExpression("false ? 'trueExp' : 'falseExp'").getValue(String.class);
    System.out.println(falseString);
    // Elvis 操作符号
    // 判断是否为空 , 为空返回后面的 否则返回当前
    // name!= null?name:"Unknown" <> name?:"Unknown"
    StandardEvaluationContext context = new StandardEvaluationContext();
    context.setVariable("name", null);
    String name = parser.parseExpression("#name?:'hello'").getValue(context, String.class);
    System.out.println(name);
    // 安全导航运算符
    Person person = new Person();
    context.setVariable("person", null);
    String name1 = parser.parseExpression("#person?.name").getValue(context, String.class);
    //String name1 = parser.parseExpression("#person.name").getValue(context, String.class);
  }

  /**
   * 集合选择器
   * <li>?[...]  集合筛选 类似于 lambda  filter
   * <li>^[...] 获取第一个符合的
   * <li>$[...]  获取最后一个符合的
   */
  @Test
  public void test15() {
    ExpressionParser parser = new SpelExpressionParser();
    List<Integer> list = new ArrayList<>();
    list.add(1);
    list.add(2);
    list.add(3);
    StandardEvaluationContext context = new StandardEvaluationContext(list);
    // ?[...]  集合筛选 类似于 lambda  filter
    List<Integer> afterList = parser.parseExpression("#root.?[#this>1]").getValue(context, List.class);
    // 获取第一个匹配项
    Integer first = parser.parseExpression("#root.^[#this>1]").getValue(context, Integer.class);
    // 获取最后一个匹配项
    Integer last = parser.parseExpression("#root.$[#this>1]").getValue(context, Integer.class);
    System.out.println(afterList);
    System.out.println(first);
    System.out.println(last);
  }

  /**
   * 集合投影
   */
  @Test
  public void test16() {
    ExpressionParser parser = new SpelExpressionParser();
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
    List<String> nameList = parser.parseExpression("#root.![name]").getValue(context, List.class);
  }


  /**
   * 表达式模板
   */
  @Test
  public void test17() {
    ExpressionParser parser = new SpelExpressionParser();
    // 定义一个表达式模板 #{dss} dd #{}
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
    String value =
        parser.parseExpression("第一个人名#{#root[0].name},第二个人名#{#root[1].name}", new TemplateParserContext())
            .getValue(context, String.class);
    System.out.println(value);
  }
}
