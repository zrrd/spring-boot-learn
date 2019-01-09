package cn.learn.springboot;

import cn.learn.springboot.resttemplate.CookieRestTemplate;
import com.alibaba.fastjson.JSONObject;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import lombok.Data;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootTipsApplicationTests {


  @Autowired
  RestTemplate restTemplate;

  @Autowired
  CookieRestTemplate cookieRestTemplate;

  @Test
  public void restTemplateTest() {
    String tea = "{\"lemon\":\"aaa\"}";
    restTemplate.put("http://47.100.252.127:9200/lemon/soar/12", tea);

  }

  @Data
  class Scene {

    private String sceneData;
    private String decisionItemBOList;
    private String decisionNodeBO;
  }

  @Data
  class Robot {

    private String robotData;
    private List<Scene> sceneList;
  }

  @SuppressWarnings("all")
  @Test
  public void testLogin() {
    List<Map> robots = (List<Map>) cookieRestTemplate
        .getForObject("https://crm.byrobot.cn/api/robot/list?searchSortType=1&robotDefId=",
            Map.class).get("data");
    List<Robot> allRobot = new ArrayList<>();
    //遍历模板列表
    for (Map r : robots) {
      int robotDefId = (int) r.get("robotDefId");
      Robot robot = new Robot();
      List<Scene> scenes = new ArrayList<>();
      robot.setRobotData(JSONObject.toJSONString(r));
      robot.setSceneList(scenes);
      //所有流程
      List<Map> sceneNodeList = (List<Map>) cookieRestTemplate.getForObject(
          "https://crm.byrobot.cn/api/sceneNode/list?sceneDefId={robotDefId}&environment=dev&decisionType=0",
          Map.class, robotDefId).get("data");
      List<Map> recordList = (List<Map>) cookieRestTemplate.getForObject(
          "https://crm.byrobot.cn/api/scene/record/list?sceneDefId={robotDefId}&environment=dev",
          Map.class,
          robotDefId).get("data");
      if (recordList != null && !recordList.isEmpty()) {
        int sceneRecordId = (int) recordList.get(0).get("sceneRecordId");
        for (Map sceneNode : sceneNodeList) {
          int sceneNodeId = (int) sceneNode.get("sceneNodeId");
          int sceneDefId = (int) sceneNode.get("sceneDefId");
          Map devDecision = (Map) cookieRestTemplate.getForObject(
              "https://crm.byrobot.cn/api/devDecision/decisionTree?sceneDefId={sceneDefId}&sceneNodeId={sceneNodeId}&sceneRecordId={sceneRecordId}&environment=dev",
              Map.class, sceneDefId, sceneNodeId, sceneRecordId).get("data");
          String decisionItemBOList = JSONObject
              .toJSONString(devDecision.get("decisionItemBOList"));
          String decisionNodeBO = JSONObject.toJSONString(devDecision.get("decisionNodeBO"));
          Scene scene = new Scene();
          scene.setSceneData(JSONObject.toJSONString(sceneNode));
          scene.setDecisionItemBOList(decisionItemBOList);
          scene.setDecisionNodeBO(decisionNodeBO);
          scenes.add(scene);
        }
      }
      allRobot.add(robot);
    }
    System.out.println(allRobot);
    System.out.println(robots.size());
  }
}
