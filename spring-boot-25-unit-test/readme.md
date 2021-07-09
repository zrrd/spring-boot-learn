# just a simple demo for unit test
本项目展示了如何在各个场景下使用单元测试
如下场景 (如下场景是依赖 alibaba规范的分层逻辑)
* dao层 涉及单元测试的数据准备以及数据回滚
* manager层 dao层的调用缓存的调用以及三方接口的调用
* service层 复杂逻辑的封装下层能力的封装
* controller层

本项目的场景是用户(user)在stream上购买游戏(game)
user
stream
game