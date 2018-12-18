package cn.learn.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

/**
 * .
 *
 * @author shaoyijiong
 * @date 2018/12/18
 */
@SuppressWarnings("all")
@Data
@AllArgsConstructor
//这里可以定义创建索引的各个参数
@Document(indexName = "myitem", type = "myitem", shards = 1, replicas = 0)
public class Item {

  @Id
  private Long id;

  @Field(type = FieldType.Text, analyzer = "ik_max_word")
  private String title; //标题

  @Field(type = FieldType.Keyword)
  private String category;// 分类

  @Field(type = FieldType.Keyword)
  private String brand; // 品牌

  @Field(type = FieldType.Double)
  private Double price; // 价格

  @Field(index = false, type = FieldType.Keyword)
  private String images; // 图片地址
}
