package cn.learn.springboot;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class HelloWorldTest {

	@Test
	public void contextLoads() {
		String profile = new EnvironmentUtils().getProfile();
		System.out.println(profile);
	}

}
