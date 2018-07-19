package springboot.learn.springboot;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBoot04WebRestfulcrudApplicationTests {

	@Test
	public void contextLoads() {
		String REGEX = "^[a-zA-Z][\\w-]{5,19}";
		String wx = "a112346d";
		Pattern pattern = Pattern.compile(REGEX);
		Matcher matcher = pattern.matcher(wx);
		System.out.println(matcher.matches());
	}

}
