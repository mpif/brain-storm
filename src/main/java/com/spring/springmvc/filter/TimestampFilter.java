package com.spring.springmvc.filter;

import lombok.extern.slf4j.Slf4j;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author: caishengzhi
 * @date: 2017-11-16 22:03
 **/
@Slf4j
@Deprecated
public class TimestampFilter implements Filter {




    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest)request;
        HttpServletResponse resp = (HttpServletResponse)response;

        String requestURL = req.getRequestURL().toString();

        // add timestamp to static resource, to avoid cache
        if(requestURL != null && (requestURL.endsWith(".js") || requestURL.endsWith(".css"))) {  // static resource
            String newURL = null;
            newURL = requestURL + "?timestamp=" + System.currentTimeMillis();
            resp.sendRedirect(newURL);
            return;
        }
        try{
            chain.doFilter(request, response);
        }catch(Exception e){
            log.error(e.toString());
        }

    }

    @Override
    public void destroy() {

    }
}
