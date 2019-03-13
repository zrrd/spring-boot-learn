package cn.learn.springboot.cotroller;

import java.io.File;
import java.io.IOException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * HelloWorld
 *
 * @author shaoyijiong
 * @since 2018/6/28
 */
@RestController
public class HelloController {

  @Autowired
  BeanFactory beanFactory;


  @RequestMapping(path = "form")
  public String form() {
    return "访问成功";
  }

  @RequestMapping(path = "upload",method = RequestMethod.GET)
  public String upload(@RequestParam("file") MultipartFile file, String userId, String formId)
      throws IOException {
    File file1 = new File("D:\\a.mp3");
    file.transferTo(file1);
    return "上传成功";
  }

    @RequestMapping("a")
    public void a() {
        int a = 9 / 0;
    }
}
