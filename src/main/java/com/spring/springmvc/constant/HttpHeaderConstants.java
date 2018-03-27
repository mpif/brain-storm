package com.spring.springmvc.constant;

/**
 * @author: caishengzhi
 * @date: 2017-11-17 17:10
 **/
public class HttpHeaderConstants {

//    Accept:text/html, */*; q=0.01
//    Accept-Encoding:gzip, deflate
//    Accept-Language:zh-CN,zh;q=0.9
//    Connection:keep-alive
//    Content-Length:1417
//    Content-Type:application/x-www-form-urlencoded; charset=UTF-8
//    Cookie:BAEID=7F29166D9C03F244A07D8F60F43A4BB1
//    Host:www.mindmm.com
//    Origin:http://www.mindmm.com
//    os:2
//    path:/%E5%AF%BC%E5%9B%BEaaa.mm
//    Referer:http://www.mindmm.com/webapp
//    session:6p0h3r2rrcw700ck97fk
//    timestamp:1510896005
//    User-Agent:Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36
//    vc:0ca416d7a6e986f9e332244bee89d186
//    X-Requested-With:XMLHttpRequest

    public static final String ACCEPT = "Accept";
    public static final String ACCEPT_ENCODING = "Accept-Encoding";
    public static final String ACCEPT_LANGUAGE = "Accept-Language";
    public static final String CONNECTION = "Connection";
    public static final String CONTENT_LENGTH = "Content-Length";
    public static final String CONTENT_TYPE = "Content-Type";
    public static final String COOKIE = "Cookie";
    public static final String HOST = "Host";
    public static final String ORIGIN = "Origin";
    public static final String OS = "os";
    public static final String VC = "vc";
    public static final String PATH = "path";
    public static final String REFERER = "Referer";
    public static final String SESSION = "session";
    public static final String TIMESTAMP = "timestamp";
    public static final String USER_AGENT = "User-Agent";
    public static final String X_REQUEST_WITH = "X-Requested-With";

    public static final String[] saveFileHeaders = new String[]{
        COOKIE, PATH, SESSION, VC
    };







}
