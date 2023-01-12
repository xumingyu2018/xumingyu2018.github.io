---
title: 摄影约拍系统sql文件
---

本文是摄影约拍系统的sql文件

```sql:no-line-numbers
/*
 Navicat Premium Data Transfer

 Source Server         : 本地MySQL
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : yuepai

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for carts
-- ----------------------------
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `screen` int(0) NULL DEFAULT NULL,
  `score` int(0) NULL DEFAULT NULL,
  `posterurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of carts
-- ----------------------------
INSERT INTO `carts` VALUES (2, 'gzp', 2, 120, 'http://img2.imgtn.bdimg.com/it/u=1452048128,4141241134&fm=26&gp=0.jpg', '梦想之城', '1');
INSERT INTO `carts` VALUES (3, 'gzp', 1, 198, 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg', '图书', '2');
INSERT INTO `carts` VALUES (4, 'gzp', 1, 198, 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122592915,2313113112&fm=26&gp=0.jpg', '飞龙在天', '2');

-- ----------------------------
-- Table structure for chatinfo
-- ----------------------------
DROP TABLE IF EXISTS `chatinfo`;
CREATE TABLE `chatinfo`  (
  `chatid` int(0) NOT NULL AUTO_INCREMENT,
  `sendid` int(0) NULL DEFAULT NULL,
  `getterid` int(0) NULL DEFAULT NULL,
  `content` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `info` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`chatid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chatinfo
-- ----------------------------
INSERT INTO `chatinfo` VALUES (1, 1, 2, '我想定制一套', NULL);
INSERT INTO `chatinfo` VALUES (2, 1, 2, '感觉不错', NULL);
INSERT INTO `chatinfo` VALUES (3, 2, 1, '什么预算', NULL);
INSERT INTO `chatinfo` VALUES (4, 3, 1, '什么预算什么预算', NULL);
INSERT INTO `chatinfo` VALUES (5, 1, 2, 'asdasd', NULL);
INSERT INTO `chatinfo` VALUES (6, 1, 2, 'asdd', NULL);
INSERT INTO `chatinfo` VALUES (7, 1, 2, '23', NULL);
INSERT INTO `chatinfo` VALUES (13, 1, 2, 'wwwerwerwer', NULL);
INSERT INTO `chatinfo` VALUES (14, 1, 2, 'sfdsdfsdf', NULL);
INSERT INTO `chatinfo` VALUES (15, 3, 2, 'aaaadasasd', NULL);
INSERT INTO `chatinfo` VALUES (16, 1, 2, 'sdas ', NULL);
INSERT INTO `chatinfo` VALUES (17, 1, 2, '阿三大苏打', NULL);
INSERT INTO `chatinfo` VALUES (18, 1, 3, '啊实打实', NULL);
INSERT INTO `chatinfo` VALUES (19, 2, 1, '阿松大', NULL);
INSERT INTO `chatinfo` VALUES (20, 1, 2, 'asdasd ', NULL);
INSERT INTO `chatinfo` VALUES (21, 2, 46, 'dasas', NULL);
INSERT INTO `chatinfo` VALUES (22, 2, 47, 'asdasdasd', NULL);
INSERT INTO `chatinfo` VALUES (23, 2, 47, '阿松大', NULL);
INSERT INTO `chatinfo` VALUES (24, 1, 2, 'asd', NULL);
INSERT INTO `chatinfo` VALUES (25, 1, 2, 'a', NULL);
INSERT INTO `chatinfo` VALUES (26, 1, 2, 'y', NULL);
INSERT INTO `chatinfo` VALUES (27, 1, 2, 'asd', NULL);
INSERT INTO `chatinfo` VALUES (28, 1, 2, 'asd', NULL);
INSERT INTO `chatinfo` VALUES (29, 1, 2, 'asd', NULL);
INSERT INTO `chatinfo` VALUES (30, 1, 2, 'asdasd', NULL);
INSERT INTO `chatinfo` VALUES (31, 1, 0, 'sada', NULL);
INSERT INTO `chatinfo` VALUES (32, 1, 3, 'asd', NULL);

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect`  (
  `Id` int(0) NOT NULL AUTO_INCREMENT,
  `goodsid` int(0) NULL DEFAULT NULL,
  `userid` int(0) NULL DEFAULT NULL,
  `type` int(0) NULL DEFAULT 1,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES (6, 21, 41, 1);
INSERT INTO `collect` VALUES (9, 5, 41, 1);
INSERT INTO `collect` VALUES (10, 22, 41, 1);
INSERT INTO `collect` VALUES (11, 23, 47, 1);
INSERT INTO `collect` VALUES (13, 19, 47, 1);
INSERT INTO `collect` VALUES (14, 5, 47, 1);
INSERT INTO `collect` VALUES (17, 17, 1, 1);
INSERT INTO `collect` VALUES (16, 13, 1, 1);
INSERT INTO `collect` VALUES (18, 26, 1, 1);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `commentid` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `creattime` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goodsid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`commentid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 34 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, '13414444444', '啊', '2020-02-19 22:12', '23', NULL);
INSERT INTO `comment` VALUES (2, '13414444444', '啊2', '2020-02-19 22:10', '23', NULL);
INSERT INTO `comment` VALUES (3, '13414444451', 'aaaaaaa', '2020-02-20 16:17', '22', NULL);
INSERT INTO `comment` VALUES (4, '13414444451', 'wwq', '2020-02-20 16:17', '21', NULL);
INSERT INTO `comment` VALUES (5, '13414444451', 'wwqaaa', '2020-02-20 16:18', '21', NULL);
INSERT INTO `comment` VALUES (6, '13414444446', '啊啊啊', '2020-02-20 16:24', '21', NULL);
INSERT INTO `comment` VALUES (7, '13414444446', '书本不错', '2020-03-14 21:26', '23', NULL);
INSERT INTO `comment` VALUES (8, '13414444446', '不错，想买', '2020-03-14 21:36', '23', NULL);
INSERT INTO `comment` VALUES (9, '13414444446', '我想要', '', '21', '');
INSERT INTO `comment` VALUES (10, '13414444449', '撒旦', '', '117', '');
INSERT INTO `comment` VALUES (11, '13414444449', 'sad ', '', '13', '');
INSERT INTO `comment` VALUES (12, '44', '我想去', '', '22', '');
INSERT INTO `comment` VALUES (13, '44', '嘿嘿', '', '22', '');
INSERT INTO `comment` VALUES (14, '13414849536', '撒旦', '', '22', '');
INSERT INTO `comment` VALUES (15, '13414849536', '测试', '', '22', '');
INSERT INTO `comment` VALUES (16, '13414849536', '阿斯顿', '', '22', '');
INSERT INTO `comment` VALUES (17, '13414849536', '阿斯顿', '', '22', '');
INSERT INTO `comment` VALUES (18, '13414849536', '阿斯顿', '', '22', '');
INSERT INTO `comment` VALUES (19, '13414849536', '过热', '', '22', '');
INSERT INTO `comment` VALUES (20, '13414849536', '而太热', '', '22', '');
INSERT INTO `comment` VALUES (21, '13414849536', '尔特瑞特', '', '22', '');
INSERT INTO `comment` VALUES (22, '13414849536', '长春是个好地方', '', '26', '');
INSERT INTO `comment` VALUES (23, '13711111111', '阿萨', '', '13', '');
INSERT INTO `comment` VALUES (24, '13711111111', '阿斯顿', '', '13', '');
INSERT INTO `comment` VALUES (25, '13711111111', '阿斯顿', '', '13', '');
INSERT INTO `comment` VALUES (26, '13711111111', '阿斯顿', '', '13', '');
INSERT INTO `comment` VALUES (27, '13711111111', '阿斯顿', '', '13', '');
INSERT INTO `comment` VALUES (28, '13711111111', '阿斯顿', '', '13', '');
INSERT INTO `comment` VALUES (29, '13711111111', '阿斯顿', '', '13', '');
INSERT INTO `comment` VALUES (30, '13711111111', '阿斯顿', '', '13', '');
INSERT INTO `comment` VALUES (31, '13711111111', '3', '', '13', '');
INSERT INTO `comment` VALUES (32, '13711111111', '3', '', '13', '');
INSERT INTO `comment` VALUES (33, '13711111111', 'sad ', '', '1', '');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `posterurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `score` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `actor` varchar(5000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `screen` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isshow` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `wish` int(0) NULL DEFAULT NULL,
  `playinfo` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 205 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (5, '安徽黄山', 'http://localhost:3001/public\\ua4dJ9wFMFpIGlI8sa_M_40q.jpg', '1', '8120', '<p><img src=\"http://localhost:3001/public\\ajg7p3dZdZbYyYaW9N_Xvlv0.jpg\" style=\"max-width:100%;\"><br></p><p>这是我上次拍的</p>', '5', '安徽黄山', 2, 33);
INSERT INTO `goods` VALUES (13, '北京古巷婚纱照', 'http://localhost:3001/public\\bxTeL1sI1v8N9MaPLsZtj6i-.jpg', '1', '3300', '<p><img src=\"http://localhost:3001/public\\go58saeaWdhuUU7ahmzDASC4.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\W2hIP1mEAWn9P25ssI4bNLAP.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\7alrA0BssRrJAh3-doynpqWI.jpg\" style=\"max-width: 100%;\"><br></p>', '3', '北京', 2, 79);
INSERT INTO `goods` VALUES (17, '三亚婚纱', 'http://localhost:3001/public\\Omk5miU6fvSrlfLq1Ol_4-AR.jpg', '1', '2800', '三亚阳朔漓江竹筏游自由行【很惬意的旅行】<p><img src=\"http://localhost:3001/public\\cxrEtkhQFJEwiqzrlV066BHJ.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\wLPhcd1Q78A1dEN8qMVOhYDz.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\yymlnAZ6R73CZmy9tgXxJTPn.jpg\" style=\"max-width: 100%;\"><br></p>', '4', '三亚婚纱', 2, 23);
INSERT INTO `goods` VALUES (18, '九寨沟风景区', 'http://localhost:3001/public\\CRjNlBB7dIU9oJYpxMSqQ7Vu.jpg', '2', '2980', '九寨沟风景区<p><img src=\"http://localhost:3001/public\\z8J53j00XGcY-lyspJAs0r3_.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\Gdn1sj4Zm3H0KMNS1akieeoc.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\zM3iebi7gsPj9bH7pa70i6kV.jpg\" style=\"max-width: 100%;\"><br></p>', '3', '九寨', 2, 78);
INSERT INTO `goods` VALUES (19, '乐山大佛景区艺术照', 'http://localhost:3001/public\\vDJypdOob4XRDKXlt0rW3XYH.jpg', '2', '1980', '当日，四川乐山大佛景区恢复对外开放。据乐山大佛风景名胜区管理委员会介绍，目前乐山大佛景区露天景点全部开放，白天游江项目和“夜游三江”游山游江项目暂不开放。景区恢复开放后，景区门票实行全网实名预约购票。测试会不会变化<p><img src=\"http://localhost:3001/public\\hPo6oCgf_v80HPSU7K3qhPHf.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\geZveaWnZywYVlgHe9djj8bJ.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\kylHToG06-CZA_0kGm5moQnO.jpg\" style=\"max-width: 100%;\"><br></p>', '2', '乐山区', 2, 79);
INSERT INTO `goods` VALUES (21, '五岳', 'http://localhost:3001/public\\2P2Ar7mgEzGXBotKR2pYR4LP.jpg', '2', '2960', '五岳攻略 五岳游玩顺序来过长春的小伙伴都知道，这个地方是一个国家级的森林公园，并且也是很多外地人都不太了解的公园的景点，不过当地人都知道，这个地方其实也很不错，很受欢迎，环境也很好，尤其是在冬天的时候就可以来这个地方滑雪，这里游玩的项目很多，并且都是特别的有趣，如果你要来长春，并且不怕冷，那么就最好在冬天的时候来这里，因为冬天是最好玩的时候，一般来说这的门票也不贵，大概就是三十元，开放的时间是在早上的八点半到下午的四点半左右。<p><img src=\"http://localhost:3001/public\\H5Psutf8zmhbgq6b6bUCdw25.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\Qjy025vTaxTiEfTiYWySeZPc.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\QPW4bTPwEQz5w1iX33Cs-58l.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\PV3_G2Ll2rHT_-TU_ecU1-H8.jpg\" style=\"max-width: 100%;\"><br></p>', '3', '五岳', 3, 13);
INSERT INTO `goods` VALUES (22, '柯岩风景区非主流照片黑白', 'http://localhost:3001/public\\64Nggsb8tV3ipqdIWgJ8XzbI.jpg', '3', '1980', '柯岩风景区位于绍兴古城西8公里处，总规划面积6.87平方公里，是鉴湖省级风景名胜区的核心景区，也鉴湖—柯岩旅游区的主要观光休闲内容。景区以古越文化为内涵，古采石遗景为特色，始于汉代，距今已有1800多年历史；至清代，形成著名\"柯岩八景\"，为越中胜景，再经过现代别具匠心的园林营造，形成柯岩、鉴湖景区，集中反映了绍兴的石文化、水文化、酒文化、名士文化、宗教文化。柯岩的石佛为省级文物保护单位。<p><img src=\"http://localhost:3001/public\\K9maKHBhk_eurIk61XfqNU3S.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\2PbpPEfFTMMxnum2SvGkRBZw.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\sM3QHC45eJImpg3HixoXjeYP.jpg\" style=\"max-width: 100%;\"><br></p>', '3', '柯岩风景区', 4, 23);
INSERT INTO `goods` VALUES (23, '桂林游', 'http://localhost:3001/public\\MRivDfiHMjL_qA8HmF0w-W-0.jpg', '3', '2900', '桂林游去什么景点<img src=\"http://localhost:3001/public\\ltnwD0wq_piiSkDgStgtOxEZ.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\YW-CwGDfCtXdUi1BgQE9M_6u.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\HRI_zomZxZJWVkhXgvuCLp9W.jpg\" style=\"max-width:100%;\"><p><br></p>', '23', '桂林', 3, 22);
INSERT INTO `goods` VALUES (26, '粉红色套装艺术照', 'http://localhost:3001/public\\plj7Bu5JtHqtt0Jd7Ys82KJg.jpg', '3', '980', '长春旅游景点推荐<p><img src=\"http://localhost:3001/public\\AN3Ri5LzznByB1eXyfOVI7JF.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\GM8Yir1nnLqcwN1rJHyTVquW.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\6Ip_1h0JOA-FzO_NnvMfAb0f.jpg\" style=\"max-width: 100%;\"><br></p>', '13', '长春', 3, 78);
INSERT INTO `goods` VALUES (27, '汽车现代照', 'http://localhost:3001/public\\Mcb1PPkugC8wd9ailjAdCzU9.jpg', '4', '2900', '国内旅游业最近非常赶潮流，前一段时间，全国各地的景点掀起了免费潮，对全国的医务人员免费。这两天，景点又掀起了恢复开放的潮流。随着2月19日杭州西湖宣布开放以后，多地景点也陆续恢复运营，其中备受游客青睐的丽江就在其中。<p><img src=\"http://localhost:3001/public\\K6-YVBzY7gmp_tJp1kmuVmmb.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\VQ5QocAMhcgFJZZWrWwxsT_n.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\qkUjIKumB_Zk0rV3yg27kW-A.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\Y4czNziPpX0Q-YOWW6v7wcY1.jpg\" style=\"max-width: 100%;\"><br></p>', '1', '丽江', 4, 78);
INSERT INTO `goods` VALUES (28, '现代婚纱照', 'http://localhost:3001/public\\IPH_Rt-siVzLm7wjqgPgN4VB.jpg', '4', '29800', '　豫园不仅是著名的江南古典园林，更是闻名中外的名胜古迹和游览胜地。不仅可以让人欣赏雕梁画栋、亭台楼阁之美，更可赏名画、逛商铺、享美食，在热闹与祥和的氛围中尽情感受传统文化魅力。<p><img src=\"http://localhost:3001/public\\-QklAXg1ZD1xp9skW464qEfC.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\lWlYpukNM4FJM0aCeAVDnNLC.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\BzXk56h90RIUbq83Sdd7Ja30.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\MGaCMrfmN3CKQkrQVv-HDun8.jpg\" style=\"max-width: 100%;\"><br></p>', '32', '上海', 2, 32);
INSERT INTO `goods` VALUES (113, '圆明园情侣照', 'http://localhost:3001/public\\27SwBYBDguo-_RWUQN_0eHXC.jpg', '7', '29800', ' 如果故宫是北京的心脏的话，那么圆明园就是北京的肩膀，圆明园刚好就在故宫的西北角，位于著名的学府区域海淀区，地铁过来也算是比较方便，就是花费的时间会比较长，因为我刚好是从北京的东北角过来的，地铁的时间也用了一个半小时。 如果不是高峰期的话，其实开车过来挺方便的，有很大的停车场。 （概况） 民园占地面积340多公顷，建筑的面积就占了20多万平方米，由圆明园及其附园长春园和绮春园（后改称万春园）组成，通称为“圆明三园”。此外，还有许多小园，分布在东、西、南三面，众星拱月般环绕周围。<p><img src=\"http://localhost:3001/public\\P16ShYIKaXdMrvGHcQzT1C6m.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\j-hIM12jDpb4D99Z7RsXlKMc.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\8ccRJtJyZd5f8uk0zSS_fAgv.jpg\" style=\"max-width: 100%;\"><br></p>', '3', '北京', 3, 78);
INSERT INTO `goods` VALUES (114, '张家界情侣照', 'http://localhost:3001/public\\0u5J4TRK8Vnrntai6s05qxBj.jpg', '8', '29800', '深圳到张家界纯玩旅行攻略费用,当地旅行团六日游-本周热搜c<p><img src=\"http://localhost:3001/public\\ZjTcm3-vj0Io59WhpW-z7BEF.jpg\" style=\"max-width:100%;\"><img src=\"http://localhost:3001/public\\dZLL5c0PTstldfEZRejqQ4yQ.jpg\" style=\"max-width: 100%;\"><img src=\"http://localhost:3001/public\\-zRZ0-Vfosb3YDQKMsNthlCG.jpg\" style=\"max-width: 100%;\"><br></p>', '4', '湖南', 2, 78);

-- ----------------------------
-- Table structure for lianxi
-- ----------------------------
DROP TABLE IF EXISTS `lianxi`;
CREATE TABLE `lianxi`  (
  `lianxiid` int(0) NOT NULL AUTO_INCREMENT,
  `myid` int(0) NULL DEFAULT NULL,
  `otherid` int(0) NULL DEFAULT NULL,
  `othername` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `myname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`lianxiid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lianxi
-- ----------------------------
INSERT INTO `lianxi` VALUES (1, 1, 3, 'admin', 'gzp');
INSERT INTO `lianxi` VALUES (2, 1, 2, '完小吗', 'gzp');

-- ----------------------------
-- Table structure for m_user
-- ----------------------------
DROP TABLE IF EXISTS `m_user`;
CREATE TABLE `m_user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(55) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `usersex` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userage` int(0) NULL DEFAULT NULL,
  `useraddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userpwd` varchar(55) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `usertype` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 50 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of m_user
-- ----------------------------
INSERT INTO `m_user` VALUES (1, 'gzp', '男', 12, '广东深圳', '1', 1);
INSERT INTO `m_user` VALUES (2, 'admin', '男', 30, '广东广州', '1', 2);
INSERT INTO `m_user` VALUES (3, '13414849536', '男', NULL, '广东', '123456gg', 2);
INSERT INTO `m_user` VALUES (4, '13333333333', '男', NULL, '广东广州', '123456gg', 2);
INSERT INTO `m_user` VALUES (46, '13411112222', '男', NULL, '广东', '123456gg', 1);
INSERT INTO `m_user` VALUES (47, '13711111111', '保密', NULL, '广东', '123456gg', 1);
INSERT INTO `m_user` VALUES (48, 'admin2', NULL, NULL, NULL, '123456', 2);
INSERT INTO `m_user` VALUES (49, 'admin4', NULL, NULL, NULL, '123456', 2);

-- ----------------------------
-- Table structure for orderdetail
-- ----------------------------
DROP TABLE IF EXISTS `orderdetail`;
CREATE TABLE `orderdetail`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `ordernumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `number` int(0) NULL DEFAULT NULL,
  `goodsid` int(0) NULL DEFAULT NULL,
  `screen` int(0) NULL DEFAULT NULL,
  `score` int(0) NULL DEFAULT NULL,
  `posterurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 134 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderdetail
-- ----------------------------
INSERT INTO `orderdetail` VALUES (132, '7195944582', 1, 26, 1, 980, 'http://localhost:3001/public\\plj7Bu5JtHqtt0Jd7Ys82KJg.jpg', '粉红色套装艺术照');
INSERT INTO `orderdetail` VALUES (131, '8580366294', 1, 17, 1, 2800, 'http://localhost:3001/public\\Omk5miU6fvSrlfLq1Ol_4-AR.jpg', '三亚婚纱');
INSERT INTO `orderdetail` VALUES (130, '8714995111', 1, 28, 1, 29800, 'http://localhost:3001/public\\IPH_Rt-siVzLm7wjqgPgN4VB.jpg', '现代婚纱照');
INSERT INTO `orderdetail` VALUES (129, '2144919873', 1, 113, 1, 29800, 'http://localhost:3001/public\\27SwBYBDguo-_RWUQN_0eHXC.jpg', '圆明园情侣照');
INSERT INTO `orderdetail` VALUES (128, '7871040484', 1, 23, 1, 2900, 'http://localhost:3001/public\\MRivDfiHMjL_qA8HmF0w-W-0.jpg', '桂林游');
INSERT INTO `orderdetail` VALUES (127, '9233349554', 1, 13, 1, 3300, 'http://localhost:3001/public\\bxTeL1sI1v8N9MaPLsZtj6i-.jpg', '北京古巷婚纱照');
INSERT INTO `orderdetail` VALUES (126, '4927245441', 1, 13, 1, 3300, 'http://localhost:3001/public\\bxTeL1sI1v8N9MaPLsZtj6i-.jpg', '北京古巷婚纱照');
INSERT INTO `orderdetail` VALUES (133, '44d3571a-10a2-4f8d-b4cb-542504623f4c', 1, 5, 1, 8120, 'http://localhost:3001/public\\ua4dJ9wFMFpIGlI8sa_M_40q.jpg', '安徽黄山');

-- ----------------------------
-- Table structure for orderinfo
-- ----------------------------
DROP TABLE IF EXISTS `orderinfo`;
CREATE TABLE `orderinfo`  (
  `id` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ordernumber` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `total` int(0) NULL DEFAULT NULL,
  `type` int(0) NULL DEFAULT NULL,
  `goodsid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `creattime` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `takeuserid` int(0) NULL DEFAULT NULL,
  `ordertype` int(0) NULL DEFAULT NULL
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderinfo
-- ----------------------------
INSERT INTO `orderinfo` VALUES ('8382478408', '8580366294', 2800, 1, '17,', '2021-03-22 22:11', 'gzp', 2, 2);
INSERT INTO `orderinfo` VALUES ('2447319490', '8714995111', 29800, 1, '28,', '2021-03-22 22:4', 'gzp', 2, 1);
INSERT INTO `orderinfo` VALUES ('1726444339', '2144919873', 29800, 1, '113,', '2021-03-22 22:4', 'gzp', 3, 1);
INSERT INTO `orderinfo` VALUES ('0368746447', '7871040484', 2900, 1, '23,', '2021-03-22 20:38', 'gzp', 3, 2);
INSERT INTO `orderinfo` VALUES ('13d5aca7-a159-45e2-8e83-240c93e0e0c2', '44d3571a-10a2-4f8d-b4cb-542504623f4c', 8120, 1, '5,', '2021-05-25', 'gzp', 2, 1);

-- ----------------------------
-- Table structure for rowcomment
-- ----------------------------
DROP TABLE IF EXISTS `rowcomment`;
CREATE TABLE `rowcomment`  (
  `commentid` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `creattime` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goodsid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`commentid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rowcomment
-- ----------------------------
INSERT INTO `rowcomment` VALUES (1, '13414444444', '测试', '2020-02-20 16:17', '1', NULL);
INSERT INTO `rowcomment` VALUES (2, '13711111111', 'asd ', '', '1', '');
INSERT INTO `rowcomment` VALUES (3, '13711111111', 'asd2', '', '1', '');
INSERT INTO `rowcomment` VALUES (4, '13711111111', 'sda', '', '1', '');
INSERT INTO `rowcomment` VALUES (5, '13711111111', 'asd', '', '1', '');
INSERT INTO `rowcomment` VALUES (6, '13711111111', '2', '', '1', '');
INSERT INTO `rowcomment` VALUES (7, '13711111111', '3', '', '1', '');
INSERT INTO `rowcomment` VALUES (8, '13711111111', '4', '', '1', '');
INSERT INTO `rowcomment` VALUES (9, '13711111111', '5', '', '1', '');
INSERT INTO `rowcomment` VALUES (10, '13711111111', '6', '', '1', '');
INSERT INTO `rowcomment` VALUES (11, '13711111111', '2', '', '1', '');
INSERT INTO `rowcomment` VALUES (12, '13711111111', '不错', '', '1', '');

-- ----------------------------
-- Table structure for rowinfo
-- ----------------------------
DROP TABLE IF EXISTS `rowinfo`;
CREATE TABLE `rowinfo`  (
  `Id` int(0) NOT NULL AUTO_INCREMENT,
  `rowname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `prCollectionNum` int(0) NULL DEFAULT 1,
  `place` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '国内',
  `userid` int(0) NULL DEFAULT 1,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 43 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rowinfo
-- ----------------------------
INSERT INTO `rowinfo` VALUES (36, '求约拍', '<p>求约拍<span style=\"font-size: 1rem;\">求约拍</span><span style=\"font-size: 1rem;\">求约拍</span><span style=\"font-size: 1rem;\">求约拍类似风格如封面</span></p>', 'http://localhost:3001/public\\HZyhojlPmKEVzTJLJvgH5fNq.jpg', '打', 1, '日本', 1);
INSERT INTO `rowinfo` VALUES (40, 'asd', '<p>asdasdasdasd<img src=\"http://localhost:3001/public\\GMbLWLlMnaB-sx5QbxpJp6bU.jpg\" style=\"font-size: 1rem; max-width: 100%;\"></p>', 'http://localhost:3001/public\\xdvMxxYD0bUB8-SQ3PvGlZgV.jpg', 'aasd', 1, '海岛', 1);
INSERT INTO `rowinfo` VALUES (38, '阿松大', '<p>啊实打实打算</p>', 'http://localhost:3001/public\\2YkwrEfN1MLm8-LJnXcP3Oy3.jpg', '松大是', 1, '日本', 46);
INSERT INTO `rowinfo` VALUES (39, '岛上拍', '<p><img src=\"http://localhost:3001/public\\cCjl2Pl_DIf4r_3G0A_LpA81.jpg\" style=\"font-size: 1rem; max-width: 100%;\"></p><p><span style=\"font-weight: bold;\"><br></span></p><p><span style=\"font-weight: bold;\">类似这种风格</span></p>', 'http://localhost:3001/public\\-oIC1SCZEtc3LtPRWVBkw3Oq.jpg', '三亚', 1, '海岛', 47);
INSERT INTO `rowinfo` VALUES (41, 'dsas', '<p>阿三大苏打啊萨达撒发顺丰啊实打实</p><p>asdasd&nbsp;</p><p>asd阿松大<span style=\"font-weight: bold;\"></span></p><p><span style=\"font-weight: bold;\">阿三大苏打</span></p>', 'http://localhost:3001/public\\2TemNS5i8YvJhmEYMV8_G_a1.jpg', '啊飒飒', 1, '泰国', 1);
INSERT INTO `rowinfo` VALUES (42, 'as', '<p>dasasdasdasd<img src=\"http://localhost:3001/public\\cWSlwMofxop4od0RyZPbdxQy.jpg\" style=\"font-size: 1rem; max-width: 100%;\"></p>', 'http://localhost:3001/public\\EC53BEMj_uG5lCT1tEhq9MLR.jpg', 'das', 1, '欧洲', 1);
INSERT INTO `rowinfo` VALUES (35, '阿三大苏打 ', '<p>萨达撒收到</p>', 'http://localhost:3001/public\\ccsrwSZa9Mt8y4eubXlGm07_.jpg', '企鹅舞', 1, '日本', 1);

-- ----------------------------
-- Table structure for useradrress
-- ----------------------------
DROP TABLE IF EXISTS `useradrress`;
CREATE TABLE `useradrress`  (
  `Id` int(0) NOT NULL AUTO_INCREMENT,
  `jieshouname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `jieshouaddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `jieshoutel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of useradrress
-- ----------------------------
INSERT INTO `useradrress` VALUES (1, '郭试试a', '广东sadasd', '13566666661', '35', 2);
INSERT INTO `useradrress` VALUES (2, '陈安安', '深圳', '13566666626', '35', 1);
INSERT INTO `useradrress` VALUES (3, 'sad', 'sadasdasdasdasd', '13666666668', '35', 1);
INSERT INTO `useradrress` VALUES (4, 'sad', '啊实打实的', '13854444444', '35', 1);
INSERT INTO `useradrress` VALUES (5, '郭问', '啊萨达撒啊问问', '13666666666', '27', 2);

SET FOREIGN_KEY_CHECKS = 1;
```
