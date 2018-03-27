package com.spring.springmvc.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashMap;
import java.util.Map;

/**
 * @author: caishengzhi
 * @date: 2017-11-17 22:59
 **/
@Setter
@Getter
@ToString
public class Message {

    /**
     * 返回状态码
     */
    private int rtn;

    /**
     * 返回状态码-成功
     */
    private static final int SUCCESS = 0;

    /**
     * 返回状态码-失败
     */
    private static final int FAIL = -1;

    /**
     * 返回内容
     */
    private Map<String, Object> data = new HashMap<String, Object>();
    /**
     * 返回提示信息
     */
    private String msg = "";

    private Message(int rtn, String msg) {
        this.rtn = rtn;
        this.msg = msg;
    }

    public Message() {

    }

    public Object put(String key, Object value) {
        return data.put(key, value);
    }

    public static Message success(String errorMsg) {
        return new Message(SUCCESS, errorMsg);
    }

    public static Message fail(String errorMsg) {
        return new Message(FAIL, errorMsg);
    }

    public Map<String, Object> getReturnResult() {
        Map<String, Object> returnMap = new HashMap<String, Object>();
        returnMap.put("rtn", rtn);
        returnMap.put("data", data);
        returnMap.put("msg", msg);
        return returnMap;
    }
}
