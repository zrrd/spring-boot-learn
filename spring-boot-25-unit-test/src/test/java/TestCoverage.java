import cn.learn.springboot.controller.JustForTest;
import org.junit.Assert;
import org.junit.Test;

/**
 * @author shaoyijiong
 * @date 2021/7/7
 */
public class TestCoverage {

  JustForTest justForTest = new JustForTest();

  @Test
  public void test1() {
    Object a = justForTest.a1("a");
    Assert.assertEquals("hello", a);
    Object b = justForTest.a1("b");
    Assert.assertEquals("world", b);
    Object c = justForTest.a1("c");
    Assert.assertNull(c);
    Object d = justForTest.a1(null);
    Assert.assertEquals("", d);
  }
}
