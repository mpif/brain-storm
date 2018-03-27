package com.spring.springmvc.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class User {

    private Long id;

    private String username;

    private String password;

    /**
     * 是否支付: 0-未支付; 1-已支付
     */
    private Byte paid;

    /**
     * 电话或者邮箱
     */
    private String telephone;

    /**
     * 用户唯一NO
     */
    private String uniqueNo;

    /**
     * 创建时间
     */
    private String createTime;

    /**
     * 更新时间
     */
    private String updateTime;


}