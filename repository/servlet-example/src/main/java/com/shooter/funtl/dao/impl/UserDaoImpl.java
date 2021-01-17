package com.shooter.funtl.dao.impl;

import com.shooter.funtl.dao.UserDao;
import com.shooter.funtl.entiry.User;

public class UserDaoImpl implements UserDao {
    public User login(String loginId, String loginPwd) {
        User user = null;
        //先根据loginId查询出用户信息，再比对loginPwd
        //不可直接根据loginId和loginPwd直接查询，防止SQL注入
        if("admin".equals(loginId)){
            if("admin".equals(loginPwd)){
                user = new User();
                user.setLoginId("admin");
                user.setLoginPwd("admin");
                user.setUserName("TEST");
            }
        }
        return user;
    }
}
