spring boot 默认的缓存是通过 simpleCache来实现的  

通过pom引入不同的Cache实现,可以操作不同的缓存中间件,如redis等,
引入了redis simpleCache springBoot的默认缓存就是通过redis了

test里面也有哦