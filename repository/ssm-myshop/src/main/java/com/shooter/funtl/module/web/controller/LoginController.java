package com.shooter.funtl.module.web.controller;

import com.shooter.funtl.common.context.SpringContext;
import com.shooter.funtl.module.entiry.User;
import com.shooter.funtl.module.service.UserService;
import com.shooter.funtl.module.service.impl.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginController extends HttpServlet{

    public static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    private UserService userService = SpringContext.getBean(UserServiceImpl.class);

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        //获取参数
        String loginId = req.getParameter("loginId");
        String loginPwd = req.getParameter("loginPwd");
        logger.info("查询用户信息：email {} 密码 {}", loginId,loginPwd);

        //查询用户信息
        User user = userService.login(loginId, loginPwd);
        //登录失败的处理
        if(user == null){
            req.setAttribute("message","用户名或密码错误！");
            req.getRequestDispatcher("/index.jsp").forward(req,resp);
        }
        //登录成功的处理
        else {
            req.setAttribute("message","登陆成功！");
            req.getRequestDispatcher("/main.jsp").forward(req,resp);
        }
    }
}