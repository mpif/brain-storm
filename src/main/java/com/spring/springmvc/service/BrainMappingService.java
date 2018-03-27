package com.spring.springmvc.service;

import com.spring.springmvc.model.BrainMapping;

import java.util.List;

/**
 * @author: caishengzhi
 * @date: 2017-11-17 22:02
 **/
public interface BrainMappingService {

    public Integer insertBrainMapping(BrainMapping brainMapping);

    public List<BrainMapping> queryBrainMappingList(String userUniqueNo);

    public BrainMapping queryBrainMappingByPath(String path);

    public List<BrainMapping> queryBrainMappingAllList();

    public Integer updateBrainMapping(BrainMapping brainMapping);

}
