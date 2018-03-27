package com.spring.springmvc.util;


import net.sf.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Map;

/**
 * @author: caishengzhi
 * @date: 2017-11-17 18:35
 **/
public class StringUtils {

    public static boolean isEmpty(String str) {
        return str == null || str.trim().length() == 0;
    }

    public static boolean isNotEmpty(String str) {
        return !isEmpty(str);
    }

    public static Map<String, Object> transferJsonToMap(String jsonStr) {
        JSONObject jsonObject = JSONObject.fromObject(jsonStr);
        Map<String, Object> mapJson = JSONObject.fromObject(jsonObject);
        System.out.println(mapJson);
        return mapJson;
    }

    public static void main(String[] args) throws UnsupportedEncodingException {

        String encodeJson = "%7B%22objectClass%22%3A%22NSDictionary%22%2C%22root%22%3A%7B%22objectClass%22%3A%22MindNode%22%2C%22ID%22%3A%22F1A26%22%2C%22rootPoint%22%3A%7B%22objectClass%22%3A%22CGPoint%22%2C%22x%22%3A276.5%2C%22y%22%3A401.5%7D%2C%22lineColorHex%22%3A%22%23BBBBBB%22%2C%22children%22%3A%7B%220%22%3A%7B%22objectClass%22%3A%22MindNode%22%2C%22ID%22%3A%22518B1%22%2C%22rootPoint%22%3A%7B%22objectClass%22%3A%22CGPoint%22%2C%22x%22%3A0%2C%22y%22%3A0%7D%2C%22lineColorHex%22%3A%22%23DC306C%22%2C%22children%22%3A%7B%220%22%3A%7B%22objectClass%22%3A%22MindNode%22%2C%22ID%22%3A%22DNE2G%22%2C%22rootPoint%22%3A%7B%22objectClass%22%3A%22CGPoint%22%2C%22x%22%3A0%2C%22y%22%3A0%7D%2C%22lineColorHex%22%3A%22%23DC306C%22%2C%22children%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22children2%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22text%22%3A%22ddd%22%2C%22shrink%22%3Afalse%2C%22isLeft%22%3Afalse%2C%22expandLeftEnable%22%3Afalse%2C%22markType%22%3A0%7D%2C%22objectClass%22%3A%22NSArray%22%7D%2C%22children2%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22text%22%3A%22bbb%22%2C%22shrink%22%3Afalse%2C%22isLeft%22%3Afalse%2C%22expandLeftEnable%22%3Afalse%2C%22markType%22%3A0%7D%2C%221%22%3A%7B%22objectClass%22%3A%22MindNode%22%2C%22ID%22%3A%225T135%22%2C%22rootPoint%22%3A%7B%22objectClass%22%3A%22CGPoint%22%2C%22x%22%3A0%2C%22y%22%3A0%7D%2C%22lineColorHex%22%3A%22%23BF58F5%22%2C%22children%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22children2%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22text%22%3A%22ccc%22%2C%22shrink%22%3Afalse%2C%22isLeft%22%3Afalse%2C%22expandLeftEnable%22%3Afalse%2C%22markType%22%3A0%7D%2C%22objectClass%22%3A%22NSArray%22%7D%2C%22children2%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22text%22%3A%22aaa%22%2C%22shrink%22%3Afalse%2C%22isLeft%22%3Afalse%2C%22expandLeftEnable%22%3Afalse%2C%22markType%22%3A0%7D%7D";
        String str = URLDecoder.decode(encodeJson, "UTF-8");
        System.out.println(str);

        JSONObject jsonObject = JSONObject.fromObject(str);
        Map<String, Object> mapJson = JSONObject.fromObject(jsonObject);
        System.out.println(mapJson);

    }


}
