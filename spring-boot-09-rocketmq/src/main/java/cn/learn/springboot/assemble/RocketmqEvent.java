package cn.learn.springboot.assemble;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.List;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.common.message.MessageExt;
import org.springframework.context.ApplicationEvent;

/**
 * Event类.
 *
 * @author shaoyijiong
 * @date 2018/7/30
 */
@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
public class RocketmqEvent extends ApplicationEvent {

  private static final long serialVersionUID = -4468405250074063206L;
  private DefaultMQPushConsumer consumer;
  private List<MessageExt> msgs;
  /**
   * 一般一个event只监听一个 topic 和 tag.
   */
  private String topic;
  private String tag;

  /**
   * event 构造,使SpringBoot能够监听到
   *
   * @param msgs 消息列表
   * @param consumer 消费者
   */
  public RocketmqEvent(List<MessageExt> msgs, DefaultMQPushConsumer consumer) {
    super(msgs);
    this.consumer = consumer;
    this.setMsgs(msgs);
    topic = msgs.get(0).getTopic();
    tag = msgs.get(0).getTags();
  }

  /**
   * 获得序号为0的消息内容.
   */
  public String getMsg() {
    return getMsg(0);
  }

  /**
   * 获得特定序号的消息内容.
   */
  public String getMsg(int idx) {
    return new String(getMsgs().get(idx).getBody(), StandardCharsets.UTF_8);
  }

  /**
   * 按照指定编码获得消息内容.
   */
  public String getMsg(int idx, String code) {
    try {
      return new String(getMsgs().get(idx).getBody(), code);
    } catch (UnsupportedEncodingException e) {
      return null;
    }
  }


  /**
   * 获得序号为0的消息.
   */
  public MessageExt getMessageExt() {
    return getMessageExt(0);
  }

  /**
   * 获得指定序号的消息.
   */
  public MessageExt getMessageExt(int idx) {
    return getMsgs().get(idx);
  }

  /**
   * 获得序号为0点消息内容.
   */
  public byte[] getBody() {
    return getBody(0);
  }

  /**
   * 获得指定序号的消息内容.
   */
  public byte[] getBody(int idx) {
    return getMsgs().get(idx).getBody();
  }

  public String getKeys(int idx) {
    return getMsgs().get(idx).getKeys();
  }

  /**
   * 获得指定序号的主题.
   */
  public String getTopic(int idx) {
    return getMsgs().get(idx).getTopic();
  }

  /**
   * 获得指定序号的标签.
   */
  public String getTag(int idx) {
    return getMsgs().get(idx).getTags();
  }
}

