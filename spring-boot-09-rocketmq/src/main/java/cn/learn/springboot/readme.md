
#### base
* simple 简单的发送接受 
  1) SyncProducer 同步发送
  2) AsyncProducer 异步发送
  3) OnewayProducer 单向发送
  4) Consumer 接收消费者
* order 顺序发送接收
  1) OrderedProducer 顺序发送,将发送的消息放到一个队列中
  2) OrderedConsumer 顺序消费,通过给队列加锁的方式,保证同一时间只有一个消费者访问一个队列  
* broadcasting
  1) BroadcastConsumer1 广播接收者1 同一个topic也能接到消息
  2) BroadcastConsumer2 广播接收者2
* scheduled  
  1) ScheduledMessageProducer 延迟发送
  2) ScheduledMessageConsumer 接收者
* batch  批量发送
  1) BatchProducer批量发送数据
* filter 过滤器 通过sql的方式过滤消息
  1) FilterProducer 发送者 能够添加额外参数用于消费端过滤
  2) FilterConsumer 消费者 通过sql的方式过滤消息
* transaction 事务消息
  1) TransactionProducer 事务发送者 添加事务的listener 与 TransactionMQProducer
  2) TransactionListenerImpl 本地事务状态返回回调
----