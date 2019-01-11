package cn.learn.springboot;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author shaoyijiong
 * @date 2019/1/11
 */
@SuppressWarnings("all")
@RunWith(SpringRunner.class)
@SpringBootTest
public class CommandTests {

  @Resource(name = "stringRedisTemplate")
  private StringRedisTemplate srt;

  @Resource(name = "redisTemplate")
  private RedisTemplate rt;


  /**
   * 通用命令
   */
  @Test
  public void commonCommand() {
    //keys        查询key
    Set keys = rt.keys("*");
    //exists      判断一个key是否存在
    Boolean exists = rt.hasKey("name");
    //delete      删除一个或多个key
    Boolean delete = rt.delete("a");
    Long deleteList = rt.delete(Arrays.asList(new String[]{"a"}));
    //expire      为一个key设置过期时间
    Boolean expire = rt.expire("name", 10, TimeUnit.DAYS);
    //ttl         查询一个key的过期时间
    Long ttl = rt.getExpire("name");
    Long ttlTimeUnit = rt.getExpire("name", TimeUnit.DAYS);
    //persist     设置一个key为永久存活
    Boolean persist = rt.persist("name");
  }

  /**
   * 字符串指令
   */
  @Test
  public void stringCommand() {
    //set 设定指定key的值
    rt.opsForValue().set("redis", "good");
    //不存在的时候插入 setnx
    Boolean ifAbsent = rt.opsForValue().setIfAbsent("redis", "not_good");
    //存在的时候插入
    Boolean ifPresent = rt.opsForValue().setIfPresent("redis", "great");
    //setex name 5 value 设置值的同时设置过期时间
    rt.opsForValue().set("redis", "good", 5, TimeUnit.SECONDS);
    //get  获取指定key的值
    Object o = rt.opsForValue().get("redis");
    //incr key  将key中的数自增长 并返回增长后的值
    Long increment = rt.opsForValue().increment("age");
    //decr key  将key中的数字自减 返回
    Long decrement = rt.opsForValue().decrement("age");
    //mset k1 v1 k2 v2 批量设置
    Map map = new HashMap();
    map.put("a", 1);
    map.put("b", 1);
    rt.opsForValue().multiSet(map);
    List multiGet = rt.opsForValue().multiGet(Arrays.asList(new String[]{"a", "b"}));
  }

  /**
   * 列表命令
   */
  @Test
  public void listCommand() {
    //rpush key v1 v2 v3 尾部插入
    Long rightPushAll = rt.opsForList().rightPushAll("list", 1, 2, 3, 5);
    //lpush key v1 v2 v3 头部插入
    Long leftPush = rt.opsForList().leftPushAll("list", 0, -1);
    //lpop key 左边弹出(先进先出 模拟队列)
    Object leftPop = rt.opsForList().leftPop("list");
    //rpop key 右边弹出(先进后出 模拟栈)
    Object rightPop = rt.opsForList().rightPop("list");
    //lindex key num 获得第num个元素 O(n) 慎用 num可以为负数 表示倒数
    Object index = rt.opsForList().index("list", -1);
    //lrang key num1 num2 获得第num1 到 num2 个元素
    List list = rt.opsForList().range("list", 0, -1);
    //ltrim key num1 num2  删除num1 到 num2 以外的元素 O(n) 慎用
    rt.opsForList().trim("list", 0, 1);
  }
}
