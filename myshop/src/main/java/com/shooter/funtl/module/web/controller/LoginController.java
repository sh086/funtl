package com.shooter.funtl.module.web.controller;

import com.shooter.funtl.module.entiry.User;
import com.shooter.funtl.module.service.UserService;
import com.shooter.funtl.module.service.impl.UserServiceImpl;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginController extends HttpServlet{

    private UserService userService = new UserServiceImpl();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        //获取参数
        String loginId = req.getParameter("loginId");
        String loginPwd = req.getParameter("loginPwd");
        //验证用户名、密码是否正确
        User user = userService.login(loginId, loginPwd);
        //登录失败的处理
        if(user == null){
            req.getRequestDispatcher("/fail.jsp").forward(req,resp);
        }
        //登录成功的处理
        else {
            req.getRequestDispatcher("/success.jsp").forward(req,resp);
        }
    }
}