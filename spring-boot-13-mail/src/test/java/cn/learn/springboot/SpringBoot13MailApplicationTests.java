package cn.learn.springboot;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBoot13MailApplicationTests {

	@Autowired
	private JavaMailSender javaMailSender;

	@Test
	public void sendMail() {
		SimpleMailMessage message = new SimpleMailMessage();
		//邮件设置
		message.setSubject("你好");
		message.setText("你好啊");
		message.setTo("fantasy9417@163.com");
		message.setFrom("935457623@qq.com");

		javaMailSender.send(message);
	}

}
