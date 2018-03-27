package com.spring.springmvc.service.impl;

import com.spring.springmvc.controller.UserSessionController;
import com.spring.springmvc.mapper.BrainMappingMapper;
import com.spring.springmvc.model.BrainMapping;
import com.spring.springmvc.service.BrainMappingService;
import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author: caishengzhi
 * @date: 2017-11-17 22:03
 **/
@Service("brainMappingService")
public class BrainMappingServiceImpl implements BrainMappingService {

    private Logger log = LogManager.getLogger(UserSessionController.class);

    @Resource
    private BrainMappingMapper brainMappingMapper;

    @Override
    public Integer insertBrainMapping(BrainMapping brainMapping) {
        return brainMappingMapper.insertSelective(brainMapping);
    }

    @Override
    public List<BrainMapping> queryBrainMappingList(String userUniqueNo) {
        return brainMappingMapper.queryBrainMappingList(userUniqueNo);
    }

    @Override
    public BrainMapping queryBrainMappingByPath(String path) {
        return brainMappingMapper.queryBrainMappingByPath(path);
    }

    @Override
    public List<BrainMapping> queryBrainMappingAllList() {
        return brainMappingMapper.queryBrainMappingAllList();
    }

    @Override
    public Integer updateBrainMapping(BrainMapping brainMapping) {
        return brainMappingMapper.updateSelective(brainMapping);
    }
}
