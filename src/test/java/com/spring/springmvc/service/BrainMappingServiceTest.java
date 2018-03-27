package com.spring.springmvc.service;

import com.spring.springmvc.model.BrainMapping;
import com.spring.springmvc.util.Md5Utils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

/**
 * @Author: ShengzhiCai
 * @Date: 2017-11-19 0:39
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:web-context.xml")
@TestPropertySource(properties={"env=product"})
public class BrainMappingServiceTest {

    @Resource
    private BrainMappingService brainMappingService;

    @Test
    public void insertSelectiveTest() {

        try {


            BrainMapping brainMapping = new BrainMapping();
            brainMapping.setUserUniqueNo(Md5Utils.getUUID());
            brainMapping.setPath("aaa.mm");
            brainMapping.setContent("{\"objectClass\":\"NSDictionary\",\"root\":{\"objectClass\":\"MindNode\",\"ID\":\"8PHF7\",\"rootPoint\":{\"objectClass\":\"CGPoint\",\"x\":276.5,\"y\":401.5},\"lineColorHex\":\"#BBBBBB\",\"children\":{\"0\":{\"objectClass\":\"MindNode\",\"ID\":\"P32VA\",\"rootPoint\":{\"objectClass\":\"CGPoint\",\"x\":0,\"y\":0},\"lineColorHex\":\"#DC306C\",\"children\":{\"0\":{\"objectClass\":\"MindNode\",\"ID\":\"GQ836\",\"rootPoint\":{\"objectClass\":\"CGPoint\",\"x\":0,\"y\":0},\"lineColorHex\":\"#DC306C\",\"children\":{\"objectClass\":\"NSArray\"},\"children2\":{\"objectClass\":\"NSArray\"},\"text\":\"ddd\",\"shrink\":false,\"isLeft\":false,\"expandLeftEnable\":false,\"markType\":0},\"objectClass\":\"NSArray\"},\"children2\":{\"objectClass\":\"NSArray\"},\"text\":\"bbb\",\"shrink\":false,\"isLeft\":false,\"expandLeftEnable\":false,\"markType\":0},\"1\":{\"objectClass\":\"MindNode\",\"ID\":\"052HF\",\"rootPoint\":{\"objectClass\":\"CGPoint\",\"x\":0,\"y\":0},\"lineColorHex\":\"#BF58F5\",\"children\":{\"objectClass\":\"NSArray\"},\"children2\":{\"objectClass\":\"NSArray\"},\"text\":\"ccc\",\"shrink\":false,\"isLeft\":false,\"expandLeftEnable\":false,\"markType\":0},\"objectClass\":\"NSArray\"},\"children2\":{\"objectClass\":\"NSArray\"},\"text\":\"aaa\",\"shrink\":false,\"isLeft\":false,\"expandLeftEnable\":false,\"markType\":0}}");

            Integer count = brainMappingService.insertBrainMapping(brainMapping);
            System.out.println(count == null ? "count is null" : count);




        } catch (Exception e) {
            e.printStackTrace();
        }

    }



}
