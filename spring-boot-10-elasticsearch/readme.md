SpringBoot默认使用两种技术来和ES交互

有一些查询 插入的api放在postman中

1. jest 默认不生效 (需要导入jest工具包) pom
2. SpringData ElasticSearch[es 版本可能不合适]
    版本
    spring data elasticsearch	elasticsearch
    3.1.x	6.2.2
    3.0.x	5.5.0
    2.1.x	2.4.0
    2.0.x	2.2.0
    1.3.x	1.5.2
    
    1) Client 节点信息 clusterNodes clusterName
    2) ElasticsearchTemplate 操作es
    3) 编写 ElasticsearchRepository 的子接口来操作es