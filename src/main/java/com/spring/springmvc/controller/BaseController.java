package com.spring.springmvc.controller;

import com.spring.springmvc.constant.HttpHeaderConstants;
import com.spring.springmvc.constant.SessionConstants;
import com.spring.springmvc.model.User;
import com.spring.springmvc.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * @author: caishengzhi
 * @date: 2017-11-13 16:34
 **/
public class BaseController {

    private HttpServletRequest request;
    private HttpServletResponse response;
    private HttpSession session;

    public HttpServletRequest getRequest() {
        request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        return request;
    }

    public HttpServletResponse getResponse() {
        response = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
        return response;
    }

    public HttpSession getSession() {
        return getSession(true);
    }

    public HttpSession getSession(boolean create) {
        HttpServletRequest req = getRequest();
        HttpSession session = req.getSession(create);
        return session;
    }

    public String getHeader(HttpServletRequest request, String headerName) {
        return request.getHeader(headerName);
    }

    public String getJsessionId() {
        String jsessionId = "";
        String cookie = this.getHeader(this.getRequest(), HttpHeaderConstants.COOKIE);
        if(StringUtils.isNotEmpty(cookie)) {
            String[] jsessionIdArr = cookie.split("=");
            if(jsessionIdArr != null && jsessionIdArr.length >= 2) {
                jsessionId = jsessionIdArr[1];

            }
        }
        return jsessionId;
    }

}
