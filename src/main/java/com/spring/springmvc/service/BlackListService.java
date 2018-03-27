package com.spring.springmvc.service;

import com.spring.springmvc.model.BlackList;

/**
 * @author caishengzhi
 * @date 2018/1/8 18:14
 */
public interface BlackListService {

    /**
     * 插入黑名单
     * @param record
     * @return
     */
    Integer insertSelective(BlackList record);

    /**
     * 校验黑名单
     * @param requestIp
     * @param uniqueAccount
     * @return
     */
    public boolean checkBlackList(String requestIp, String uniqueAccount);

}
