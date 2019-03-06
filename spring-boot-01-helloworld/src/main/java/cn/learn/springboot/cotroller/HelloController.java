package cn.learn.springboot.cotroller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HelloWorld
 *
 * @author shaoyijiong
 * @since 2018/6/28
 */
@RestController
public class HelloController {

    @RequestMapping(path = "/hello")
    public String helloWorld() {
        return "HelloWorld";
    }

    class Resp {

        String openid;
        String session_key;
        String unionid;

        public String getOpenid() {
            return openid;
        }

        public void setOpenid(String openid) {
            this.openid = openid;
        }

        public String getSession_key() {
            return session_key;
        }

        public void setSession_key(String session_key) {
            this.session_key = session_key;
        }

        public String getUnionid() {
            return unionid;
        }

        public void setUnionid(String unionid) {
            this.unionid = unionid;
        }
    }

    @RequestMapping(path = "/auth")
    public Resp auth(String appid, String secret, String js_code, String grant_type) {
        Resp resp = new Resp();
        resp.setOpenid(js_code);
        resp.setUnionid("dsahkdlsja");
        resp.setSession_key("nfkjsnfsknfksd");
        return resp;
    }

    @RequestMapping(path = "form")
    public String form (String a,String formId) {
        return "访问成功";
    }
}
