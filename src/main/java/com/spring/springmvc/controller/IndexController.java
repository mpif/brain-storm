package com.spring.springmvc.controller;

import com.spring.springmvc.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * @author: caishengzhi
 * @date: 2017-11-15 17:44
 **/
@Controller
@Slf4j
public class IndexController extends BaseController {

    @Resource
    private UserService userService;

    @RequestMapping(value = "/home", method=GET)
    public ModelAndView showIndex(HttpServletRequest request, HttpServletResponse response){

        Map<String, String> cntMap = new HashMap<String, String>();
        cntMap.put("welcomeMsg", "Welcome to Brain Storm Website!");

        return new ModelAndView("index", cntMap);
    }


}
