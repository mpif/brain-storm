package com.spring.springmvc.mapper;

import com.spring.springmvc.model.BlackList;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BlackListMapper {

    Integer deleteByPrimaryKey(Long id);

    Integer insert(BlackList record);

    Integer insertSelective(BlackList record);

    BlackList selectByPrimaryKey(Long id);

    List<BlackList> queryByIdAndAccount(@Param(value="requestIp") String requestIp, @Param(value="uniqueAccount") String uniqueAccount);

    Integer updateByPrimaryKeySelective(BlackList record);

    Integer updateByPrimaryKey(BlackList record);
}