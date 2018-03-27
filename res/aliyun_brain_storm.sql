/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : brain_storm_db

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2017-11-16 00:20:16
*/

SET FOREIGN_KEY_CHECKS=0;

create database aliyun_brain_storm DEFAULT CHARACTER SET UTF8;


-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `paid` tinyint(4) DEFAULT '0' COMMENT '是否付款: 0-未付款; 1-已付款',
  `telephone` varchar(20) NOT NULL COMMENT '手机号',
  `unique_no` varchar(32) NOT NULL COMMENT '唯一编号',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`,`unique_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `brain_mapping`;
CREATE TABLE `brain_mapping` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `path` varchar(255) DEFAULT NULL COMMENT '脑图名字，路径',
  `content` longtext COMMENT '脑图内容，包括树形结构',
  `user_unique_no` varchar(32) DEFAULT NULL COMMENT '用户唯一编号',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `black_list`;
CREATE TABLE `black_list` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `request_ip` varchar(25) DEFAULT NULL COMMENT '访问IP',
  `unique_account` varchar(255) DEFAULT NULL COMMENT '唯一账户,手机号或邮箱等',
  `last_send_time` datetime DEFAULT NULL COMMENT '最后发送时间',
  `status` tinyint(4) DEFAULT '0' COMMENT '封杀类型: 1-封IP; 2-封账号',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;











