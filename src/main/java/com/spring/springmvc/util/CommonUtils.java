package com.spring.springmvc.util;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Random;

/**
 * @author: caishengzhi
 * @date: 2017-11-17 11:47
 **/
public class CommonUtils {

    private static final String DEFAULT_CHARSET = "UTF-8";

    private static final char[] digitalChars = new char[]{
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    };

    private static final char[] chars = new char[]{
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    };

    public static String urlEncode(String url) throws UnsupportedEncodingException {
        return urlEncode(url, DEFAULT_CHARSET);
    }

    public static String urlEncode(String url, String charset) throws UnsupportedEncodingException {
        return URLEncoder.encode(url, charset);
    }

    public static String urlDecode(String encodedUrl) throws UnsupportedEncodingException {
        return urlDecode(encodedUrl, DEFAULT_CHARSET);
    }

    public static String urlDecode(String encodedUrl, String charset) throws UnsupportedEncodingException {
        return URLDecoder.decode(encodedUrl, charset);
    }

    public static String randomVerifyCode() {
        StringBuffer sb = new StringBuffer();
        int charCount = 4;
        for(int i = 0; i < charCount; i ++) {
            sb.append(chars[(int)(Math.random() * 62)]);
        }
        return sb.toString();
    }

    public static String randomDigitalVerifyCode() {
        StringBuffer sb = new StringBuffer();
        int charCount = 4;
        for(int i = 0; i < charCount; i ++) {
            sb.append(digitalChars[(int)(Math.random() * 10)]);
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println(randomVerifyCode());
    }

}
