/*
 Navicat Premium Data Transfer

 Source Server         : my
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost:3306
 Source Schema         : games

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : 65001

 Date: 18/07/2018 09:13:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for game
-- ----------------------------
DROP TABLE IF EXISTS `game`;
CREATE TABLE `game`
(
  `id`           int(8)                                                 NOT NULL AUTO_INCREMENT,
  `name`         varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin  NOT NULL COMMENT '游戏名',
  `price`        double(10, 2)                                          NULL DEFAULT NULL COMMENT '游戏价格',
  `publish_date` date                                                   NULL DEFAULT NULL COMMENT '发售日期',
  `score`        double(2, 0)                                           NULL DEFAULT NULL COMMENT '游戏评分',
  `image`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 8
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_bin COMMENT = '游戏表'
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of game
-- ----------------------------
INSERT INTO `game`
VALUES (1, 'hh', 10.00, '2018-07-03', 1, NULL);
INSERT INTO `game`
VALUES (2, 'd', 2.00, '2018-07-03', 3, NULL);
INSERT INTO `game`
VALUES (3, 'd', 2.00, '2018-07-03', 3, NULL);
INSERT INTO `game`
VALUES (4, 'd', 2.00, '2018-07-03', 3, NULL);
INSERT INTO `game`
VALUES (5, 'd', 2.00, '2018-07-03', 3, NULL);
INSERT INTO `game`
VALUES (6, 'd', 2.00, '2018-07-03', 3, NULL);
INSERT INTO `game`
VALUES (7, 'aa', 10.20, '2008-01-05', 8, NULL);

-- ----------------------------
-- Table structure for steam
-- ----------------------------
DROP TABLE IF EXISTS `steam`;
CREATE TABLE `steam`
(
  `id`          int(8)      NOT NULL AUTO_INCREMENT,
  `game_id`     int(8)      NULL DEFAULT NULL COMMENT '游戏id',
  `user_id`     int(11)     NULL DEFAULT NULL COMMENT '用户id',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_bin COMMENT = '游戏库'
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`
(
  `id`       int(8)                                                NOT NULL AUTO_INCREMENT,
  `name`     varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '用户姓名',
  `game_num` int(11)                                               NULL DEFAULT NULL COMMENT '有游戏数',
  `money`    double(10, 0)                                         NULL DEFAULT NULL COMMENT '余额',
  `prefer`   varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '喜好',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 2
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_bin COMMENT = '用户表'
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user`
VALUES (1, 'hello', 10, 1001, 'rpg');

SET FOREIGN_KEY_CHECKS = 1;
