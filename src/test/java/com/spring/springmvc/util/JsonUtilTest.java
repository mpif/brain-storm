package com.spring.springmvc.util;

//import com.alibaba.fastjson.JSONObject;

import net.sf.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Map;

/**
 * @Author: ShengzhiCai
 * @Date: 2017-11-18 11:08
 */

public class JsonUtilTest {
    
    public static void main(String[] args) throws UnsupportedEncodingException {


        try {


            String encodeJson = "{\"objectClass\":\"NSDictionary\",\"root\":{\"objectClass\":\"MindNode\",\"ID\":\"8PHF7\",\"rootPoint\":{\"objectClass\":\"CGPoint\",\"x\":276.5,\"y\":401.5},\"lineColorHex\":\"#BBBBBB\",\"children\":{\"0\":{\"objectClass\":\"MindNode\",\"ID\":\"P32VA\",\"rootPoint\":{\"objectClass\":\"CGPoint\",\"x\":0,\"y\":0},\"lineColorHex\":\"#DC306C\",\"children\":{\"0\":{\"objectClass\":\"MindNode\",\"ID\":\"GQ836\",\"rootPoint\":{\"objectClass\":\"CGPoint\",\"x\":0,\"y\":0},\"lineColorHex\":\"#DC306C\",\"children\":{\"objectClass\":\"NSArray\"},\"children2\":{\"objectClass\":\"NSArray\"},\"text\":\"ddd\",\"shrink\":false,\"isLeft\":false,\"expandLeftEnable\":false,\"markType\":0},\"objectClass\":\"NSArray\"},\"children2\":{\"objectClass\":\"NSArray\"},\"text\":\"bbb\",\"shrink\":false,\"isLeft\":false,\"expandLeftEnable\":false,\"markType\":0},\"1\":{\"objectClass\":\"MindNode\",\"ID\":\"052HF\",\"rootPoint\":{\"objectClass\":\"CGPoint\",\"x\":0,\"y\":0},\"lineColorHex\":\"#BF58F5\",\"children\":{\"objectClass\":\"NSArray\"},\"children2\":{\"objectClass\":\"NSArray\"},\"text\":\"ccc\",\"shrink\":false,\"isLeft\":false,\"expandLeftEnable\":false,\"markType\":0},\"objectClass\":\"NSArray\"},\"children2\":{\"objectClass\":\"NSArray\"},\"text\":\"aaa\",\"shrink\":false,\"isLeft\":false,\"expandLeftEnable\":false,\"markType\":0}}";
            String str = URLDecoder.decode(encodeJson, "UTF-8");
            System.out.println(str);

            JSONObject jsonObject = JSONObject.fromObject(str);
            Map<String, Object> mapJson = JSONObject.fromObject(jsonObject);
            System.out.println(mapJson);


//            alibaba json
//            JSONObject jsonObject = JSONObject.parseObject(str);
//            System.out.println("这个是用JSONObject的parseObject方法来解析JSON字符串!!!");
////
//            Map<String, Object> map = (Map<String, Object>)jsonObject;
//            System.out.println(map);




        } catch (Exception e) {
            e.printStackTrace();
        }


    }
    
}
