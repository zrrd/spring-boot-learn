package cn.learn.springboot.cotroller;


/**
 * 短信回调数据
 *
 * @author shaoyijiong
 * @date 2019/8/9
 */
public class SmsReportDto {

  private String smsId;
  private String mobile;
  private String taskId;
  private Integer status;


  public String getSmsId() {
    return smsId;
  }

  public void setSmsId(String smsId) {
    this.smsId = smsId;
  }

  public String getMobile() {
    return mobile;
  }

  public void setMobile(String mobile) {
    this.mobile = mobile;
  }

  public String getTaskId() {
    return taskId;
  }

  public void setTaskId(String taskId) {
    this.taskId = taskId;
  }

  public Integer getStatus() {
    return status;
  }

  public void setStatus(Integer status) {
    this.status = status;
  }

  @Override
  public String toString() {
    return "SmsReportDto{" +
        "smsId='" + smsId + '\'' +
        ", mobile='" + mobile + '\'' +
        ", taskId='" + taskId + '\'' +
        ", status=" + status +
        '}';
  }
}
