package com.shooter.funtl.module.web.controller;
import com.shooter.funtl.common.utils.CookieUtils;
import com.shooter.funtl.module.entity.User;
import com.shooter.funtl.module.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    /**
     * 跳转登陆页面
     * */
    @RequestMapping(value = {"", "login"}, method = RequestMethod.GET)
    public String login() {
        return "login";
    }

    /**
     * 登陆逻辑
     * */
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public String login(@RequestParam(required = true) String email,
                        @RequestParam(required = true) String password,
                        HttpServletRequest httpServletRequest) {
        //查询用户信息
        User user = userService.login(email, password);
        //登录失败的处理
        if(user == null){
            return "login";
        }
        //登录成功的处理
        else {
            return "redirect:/main";
        }
    }
}
