package com.spring.springmvc.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author: caishengzhi
 * @date: 2017-11-20 16:15
 **/
public class RegexUtils {

    /**
     * 正则表达式：验证手机号
     */
    public static final String REGEX_MOBILE = "^((13[0-9])|(14[0-9])|(15[^4,\\D])|(17[0-9])|(18[0,5-9]))\\d{8}$";

    /**
     * 正则表达式：验证邮箱
     */
    public static final String REGEX_EMAIL = "^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";

    /**
     * 验证手机号
     * @param mobile
     * @return
     */
    public static boolean isValidMobile(String mobile) {
        Pattern pattern = Pattern.compile(REGEX_MOBILE);
        Matcher matcher = pattern.matcher(mobile);
        if(matcher.find()) {
            return true;
        }
        return false;
    }

    /**
     * 验证邮箱
     * @param email
     * @return
     */
    public static boolean isValidEmail(String email) {
        Pattern pattern = Pattern.compile(REGEX_EMAIL);
        Matcher matcher = pattern.matcher(email);
        if(matcher.find()) {
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValidMobile("15910198728"));
        System.out.println(isValidEmail("caiszf@162.com"));
    }

}
