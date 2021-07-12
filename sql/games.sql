SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for game
-- ----------------------------
DROP TABLE IF EXISTS `game`;
CREATE TABLE `game`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '游戏名',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '游戏价格',
  `publish_date` date NULL DEFAULT NULL COMMENT '发售日期',
  `score` double(3, 1) NULL DEFAULT NULL COMMENT '游戏评分',
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图片地址',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '游戏类型 rpg action shooter ',
  `status` tinyint(0) NOT NULL COMMENT '状态 1 - 在售 9 - 删除 0 - 未发售',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_name`(`name`) USING BTREE,
  INDEX `idx_type`(`type`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '游戏表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for steam
-- ----------------------------
DROP TABLE IF EXISTS `steam`;
CREATE TABLE `steam`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `game_id` int(0) NOT NULL COMMENT '游戏id',
  `user_id` int(0) NOT NULL COMMENT '用户id',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '游戏库' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for steam_user
-- ----------------------------
DROP TABLE IF EXISTS `steam_user`;
CREATE TABLE `steam_user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户姓名',
  `game_num` int(0) UNSIGNED NOT NULL DEFAULT 0 COMMENT '有游戏数',
  `money` decimal(10, 2) NOT NULL DEFAULT 0.00 COMMENT '余额',
  `prefer` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '喜好',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
