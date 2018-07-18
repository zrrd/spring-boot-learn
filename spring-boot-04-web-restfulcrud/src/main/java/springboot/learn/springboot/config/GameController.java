package springboot.learn.springboot.config;

import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import springboot.learn.springboot.model.Game;

/**
 * 游戏Controller 只是拿来练手,就不写多层结构了,只在controller进行crud操作.
 *
 * @author shaoyijiong
 * @date 2018/7/18
 */
@Controller
public class GameController {

  /**
   * 查询所有游戏信息,返回游戏列表页面.
   *
   * @return 游戏列表
   */
  @GetMapping("/games")
  public String list(Model model) {
    Game game = new Game();
    List<Game> games = game.selectAll();
    model.addAttribute("games", games);
    return "game/list";
  }

  /**
   * 添加游戏页面.
   *
   * @return 添加页面
   */
  @GetMapping("/game")
  public String add() {
    return "game/add";
  }

  /**
   * 添加游戏,返回游戏列表页面.
   *
   * @param game 新添加的游戏
   * @return 返回到游戏列表页面
   */
  @PostMapping("/game")
  public String add(Game game) {
    game.insert();
    return "redirect:/games";
  }
}
