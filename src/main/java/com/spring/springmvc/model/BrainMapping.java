package com.spring.springmvc.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
public class BrainMapping {

    private Long id;

    /**
     * 导图路径
     */
    private String path;

    /**
     * 导图主要内容包括树形结构
     */
    private String content;

    /**
     * 用户唯一NO
     */
    private String userUniqueNo;

    /**
     * 创建时间
     */
    private String createTime;

    /**
     * 更新时间
     */
    private String updateTime;

}