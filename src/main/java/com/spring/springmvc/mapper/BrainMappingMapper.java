package com.spring.springmvc.mapper;

import com.spring.springmvc.model.BrainMapping;

import java.util.List;

public interface BrainMappingMapper {

    Integer deleteByPrimaryKey(Long id);

    Integer insert(BrainMapping record);

    Integer insertSelective(BrainMapping record);

    BrainMapping selectByPrimaryKey(Long id);

    List<BrainMapping> queryBrainMappingList(String userUniqueNo);

    List<BrainMapping> queryBrainMappingAllList();

    public BrainMapping queryBrainMappingByPath(String path);

    Integer updateSelective(BrainMapping record);

    Integer updateByPrimaryKeyWithBLOBs(BrainMapping record);

    Integer updateByPrimaryKey(BrainMapping record);




}