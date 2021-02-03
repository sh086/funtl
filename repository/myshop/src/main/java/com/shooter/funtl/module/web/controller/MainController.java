package com.shooter.funtl.module.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {


    /**
     * 跳转登陆页面
     * */
    @RequestMapping(value = "main", method = RequestMethod.GET)
    public String login() {
        return "main";
    }


}
