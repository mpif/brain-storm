package com.spring.springmvc.filter;


import com.spring.springmvc.constant.HttpHeaderConstants;
import com.spring.springmvc.constant.SessionConstants;
import com.spring.springmvc.model.User;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * @author: caishengzhi
 * @date: 2017-11-17 18:22
 **/
public class LoginFilter implements Filter {

    private Logger log = LogManager.getLogger(LoginFilter.class);

    private String[] checkSessionUri = new String[]{
        "/listFiles",
        "/saveFile",
        "/getFile",
        "/exportFile",
        "/files/",
    };

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest)request;
        HttpServletResponse resp = (HttpServletResponse)response;

        try {
            String sessionId = req.getHeader(HttpHeaderConstants.SESSION);
            HttpSession httpSession = req.getSession(false);
            boolean isLoginFlag = false;

            String requestUrl = req.getRequestURL().toString();
            if(this.needSessionCheck(requestUrl)) {
                if (httpSession != null) {
                    User loginUser = (User) httpSession.getAttribute(sessionId);
                    String jsessionId = (String) httpSession.getAttribute(SessionConstants.SESSIONID);
                    if (loginUser != null && sessionId.equals(jsessionId)) {
                        isLoginFlag = true;
                    }
                }
                if (isLoginFlag) {
                    chain.doFilter(request, response);
                } else {
                    resp.sendRedirect("/");
                }
            } else {
                chain.doFilter(request, response);
            }
        } catch (Throwable e) {
            log.error("LoginFilter exception:{}", e);
            resp.sendRedirect("/");
        }

    }

    public String getHeader(HttpServletRequest request, String headerName) {
        return request.getHeader(headerName);
    }

    public boolean needSessionCheck(String requestUrl) {
        boolean needCheck = false;
        for(String uri : checkSessionUri) {
            if(requestUrl.indexOf(uri) >= 0) {
                needCheck = true;
            }
        }
        return needCheck;
    }

    @Override
    public void destroy() {

    }
}
