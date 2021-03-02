package cn.learn.springboot.web;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

/**
 * @author shaoyijiong
 * @date 2020/6/5
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommonResponse<T> implements Response<T> {

  /**
   * 响应码，当success为false时，code值代表服务端错误状态.
   */
  protected Integer code;

  /**
   * 响应的消息，当success为false时，message值为服务端的错误信息内容.
   */
  protected String message;

  /**
   * 响应的数据内容，success为false，该字段不会有值.
   */
  @JsonInclude(Include.NON_NULL)
  protected T data;

  @JsonInclude(Include.NON_NULL)
  private String at;

  @Override
  public T getData() {
    return data;
  }

  /**
   * 操作成功
   */
  public static CommonResponse<Void> success() {
    return new ResponseBuilder<Void>().success().build();
  }

  /**
   * 操作成功返回数据
   */
  public static <T> CommonResponse<T> success(T t) {
    return new ResponseBuilder<T>().success().data(t).build();
  }

  /**
   * 操作失败
   */
  public static CommonResponse<Void> fail(String message) {
    return new ResponseBuilder<Void>().fail().message(message).build();
  }

  /**
   * 操作失败返回响应码
   */
  public static CommonResponse<Void> fail(Integer code, String message) {
    return new ResponseBuilder<Void>().fail().codeMessage(code, message).build();
  }

  /**
   * 操作失败返回响应码
   */
  public static CommonResponse<Void> fail(Integer code, String message, Exception e) {
    return new ResponseBuilder<Void>().fail().codeMessage(code, message).at(e.getMessage()).build();
  }

  /**
   * 操作失败返回数据
   */
  public static <T> CommonResponse<T> fail(String message, T t) {
    return new ResponseBuilder<T>().fail().data(t).message(message).build();
  }


  @NoArgsConstructor
  @AllArgsConstructor
  public static class ResponseBuilder<T> {

    /**
     * 默认返回code为200.
     */
    private Integer code = 200;
    /**
     * 默认返回响应为操作成功.
     */
    private String message = "操作成功";
    private T data;
    private String at;

    public ResponseBuilder(T data) {
      this.data = data;
    }

    /**
     * 操作成功.
     */
    public ResponseBuilder<T> success() {
      this.code = HttpStatus.OK.value();
      this.message = "操作成功";
      return this;
    }

    /**
     * 操作失败.
     */
    public ResponseBuilder<T> fail() {
      this.code = HttpStatus.INTERNAL_SERVER_ERROR.value();
      this.message = HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase();
      return this;
    }

    /**
     * 自定义message.
     */
    public ResponseBuilder<T> message(String message) {
      this.message = message;
      return this;
    }

    /**
     * 自定义code.
     */
    public ResponseBuilder<T> code(int code) {
      this.code = code;
      return this;
    }

    public ResponseBuilder<T> at(String at) {
      this.at = at;
      return this;
    }

    /**
     * 自定义message和code.
     */
    public ResponseBuilder<T> codeMessage(int code, String message) {
      this.code = code;
      this.message = message;
      return this;
    }

    /**
     * 构建参数.
     */
    public ResponseBuilder<T> data(T data) {
      this.data = data;
      return this;
    }

    public CommonResponse<T> build() {
      return new CommonResponse<>(this);
    }

  }


  private CommonResponse(ResponseBuilder<T> builder) {
    code = builder.code;
    message = builder.message;
    data = builder.data;
    at = builder.at;
  }
}
