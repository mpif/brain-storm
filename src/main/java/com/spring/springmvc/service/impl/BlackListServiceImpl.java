package com.spring.springmvc.service.impl;

import com.spring.springmvc.mapper.BlackListMapper;
import com.spring.springmvc.model.BlackList;
import com.spring.springmvc.service.BlackListService;
import org.apache.commons.collections.CollectionUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author caishengzhi
 * @date 2018/1/8 18:14
 */
@Service("blackListService")
public class BlackListServiceImpl implements BlackListService {

    private Logger log = LogManager.getLogger(BlackListServiceImpl.class);

    @Resource
    private BlackListMapper blackListMapper;

    @Override
    public Integer insertSelective(BlackList record) {
        return blackListMapper.insertSelective(record);
    }

    @Override
    public boolean checkBlackList(String requestIp, String uniqueAccount) {

        if(log.isInfoEnabled()) {
            log.info("requestIp=" + requestIp + ", uniqueAccount=" + uniqueAccount);
        }

        boolean canAccess = false;

        List<BlackList> blackList = blackListMapper.queryByIdAndAccount(requestIp, uniqueAccount);
        if(CollectionUtils.isNotEmpty(blackList)) {

            if(blackList.size() == 1) {

                BlackList black = blackList.get(0);
                Byte status = black.getStatus();
                if(status != null) {
                    if(status == 0) {
                        canAccess = true;
                    } else {
                        if(log.isInfoEnabled()) {
                            log.info("查询黑名单状态为空,requestIp=" + requestIp + ", uniqueAccount=" + uniqueAccount + ", status=" + status);
                        }
                    }
                } else {
                    if(log.isInfoEnabled()) {
                        log.info("查询黑名单状态为空,requestIp=" + requestIp + ", uniqueAccount=" + uniqueAccount);
                    }
                }

            } else {
                if(log.isInfoEnabled()) {
                    log.info("查询黑名单记录不止一条,requestIp=" + requestIp + ", uniqueAccount=" + uniqueAccount + ", size=" + blackList.size());
                }
            }

        } else {
            canAccess = true;
            if(log.isInfoEnabled()) {
                log.info("查询不到黑名单记录,requestIp=" + requestIp + ", uniqueAccount=" + uniqueAccount);
            }
        }

        return canAccess;
    }

}
