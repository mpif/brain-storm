package com.spring.springmvc.util;

import java.util.UUID;

/**
 * @author: caishengzhi
 * @date: 2017-11-17 17:41
 **/
public class Md5Utils {

    public static String getUUID() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }


    public static void main(String[] args) {
        String uuid = getUUID();
        System.out.println(uuid);
        System.out.println(uuid.length());
    }


}
