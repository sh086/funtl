package com.shooter.funtl.module.web.controller;

import com.shooter.funtl.common.context.SpringContext;
import com.shooter.funtl.common.enums.CookieEnum;
import com.shooter.funtl.common.utils.CookieUtils;
import com.shooter.funtl.module.entiry.User;
import com.shooter.funtl.module.service.UserService;
import com.shooter.funtl.module.service.impl.UserServiceImpl;
import org.apache.commons.lang3.StringUtils;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginController extends HttpServlet{

    private UserService userService = SpringContext.getBean(UserServiceImpl.class);

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userInfo =  CookieUtils.getCookieValue(req, CookieEnum.USER_INFO.value());
        if(StringUtils.isNotBlank(userInfo)){
            String[] userInfoArray = userInfo.split(":");
            req.setAttribute("loginId",userInfoArray[0]);
            req.setAttribute("loginPwd",userInfoArray[1]);
            req.setAttribute("isRemember",true);
        }
        req.getRequestDispatcher("/login.jsp").forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        //获取参数
        String loginId = req.getParameter("loginId");
        String loginPwd = req.getParameter("loginPwd");
        boolean isRemember = "on".equals(req.getParameter("isRemember"));

        //查询用户信息
        User user = userService.login(loginId, loginPwd);
        //登录失败的处理
        if(user == null){
            req.setAttribute("message","用户名或密码错误！");
            req.getRequestDispatcher("/login.jsp").forward(req,resp);
        }
        //登录成功的处理
        else {
            if(isRemember){
                CookieUtils.setCookie(req,resp,
                        CookieEnum.USER_INFO.value(),String.format("%s:%s",loginId,loginPwd),
                        7 * 24 * 60 * 60);
            }else {
                CookieUtils.deleteCookie(req,resp,CookieEnum.USER_INFO.value());
            }
            req.setAttribute("message","登陆成功！");
            req.getRequestDispatcher("/main.jsp").forward(req,resp);
        }
    }
}