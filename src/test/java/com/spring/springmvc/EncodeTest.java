package com.spring.springmvc;

import org.junit.Test;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**
 * @author: caishengzhi
 * @date: 2017-11-16 11:56
 **/
public class EncodeTest {

    @Test
    public void decodeUnicodeTest() {

        try {

//            mindline.duapp.com
//            String a ="\u006d\u0069\u006e\u0064\u006c\u0069\u006e\u0065\u002e\u0064\u0075\u0061\u0070\u0070\u002e\u0063\u006f\u006d";

//            www.mindmm.com
//            String a = "\u0077\u0077\u0077\u002e\u006d\u0069\u006e\u0064\u006d\u006d\u002e\u0063\u006f\u006d";

//            mindmm.com
//            String a = "\u006d\u0069\u006e\u0064\u006d\u006d\u002e\u0063\u006f\u006d";
//            System.out.println(new String(a.getBytes(),"utf-8"));

            String a = "\u006c\u006f\u0063\u0061\u006c\u0068\u006f\u0073\u0074";
            System.out.println(new String(a.getBytes(),"utf-8"));

            String urlEncodeStr = "%7B%22objectClass%22%3A%22NSDictionary%22%2C%22root%22%3A%7B%22objectClass%22%3A%22MindNode%22%2C%22ID%22%3A%22F1A26%22%2C%22rootPoint%22%3A%7B%22objectClass%22%3A%22CGPoint%22%2C%22x%22%3A276.5%2C%22y%22%3A401.5%7D%2C%22lineColorHex%22%3A%22%23BBBBBB%22%2C%22children%22%3A%7B%220%22%3A%7B%22objectClass%22%3A%22MindNode%22%2C%22ID%22%3A%22518B1%22%2C%22rootPoint%22%3A%7B%22objectClass%22%3A%22CGPoint%22%2C%22x%22%3A0%2C%22y%22%3A0%7D%2C%22lineColorHex%22%3A%22%23DC306C%22%2C%22children%22%3A%7B%220%22%3A%7B%22objectClass%22%3A%22MindNode%22%2C%22ID%22%3A%22DNE2G%22%2C%22rootPoint%22%3A%7B%22objectClass%22%3A%22CGPoint%22%2C%22x%22%3A0%2C%22y%22%3A0%7D%2C%22lineColorHex%22%3A%22%23DC306C%22%2C%22children%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22children2%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22text%22%3A%22ddd%22%2C%22shrink%22%3Afalse%2C%22isLeft%22%3Afalse%2C%22expandLeftEnable%22%3Afalse%2C%22markType%22%3A0%7D%2C%22objectClass%22%3A%22NSArray%22%7D%2C%22children2%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22text%22%3A%22bbb%22%2C%22shrink%22%3Afalse%2C%22isLeft%22%3Afalse%2C%22expandLeftEnable%22%3Afalse%2C%22markType%22%3A0%7D%2C%221%22%3A%7B%22objectClass%22%3A%22MindNode%22%2C%22ID%22%3A%225T135%22%2C%22rootPoint%22%3A%7B%22objectClass%22%3A%22CGPoint%22%2C%22x%22%3A0%2C%22y%22%3A0%7D%2C%22lineColorHex%22%3A%22%23BF58F5%22%2C%22children%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22children2%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22text%22%3A%22ccc%22%2C%22shrink%22%3Afalse%2C%22isLeft%22%3Afalse%2C%22expandLeftEnable%22%3Afalse%2C%22markType%22%3A0%7D%2C%22objectClass%22%3A%22NSArray%22%7D%2C%22children2%22%3A%7B%22objectClass%22%3A%22NSArray%22%7D%2C%22text%22%3A%22aaa%22%2C%22shrink%22%3Afalse%2C%22isLeft%22%3Afalse%2C%22expandLeftEnable%22%3Afalse%2C%22markType%22%3A0%7D%7D=";
            String decodedUrlStr = URLDecoder.decode(urlEncodeStr, "UTF-8");
            System.out.println("decodedUrlStr:" + decodedUrlStr);

            System.out.println(urlDecode("%E6%B5%8B%E8%AF%95%E5%AF%BC%E5%9B%BE111.mm"));


        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

    }

    public String urlDecode(String url) throws UnsupportedEncodingException {
        return URLDecoder.decode(url, "UTF-8");
    }

}
