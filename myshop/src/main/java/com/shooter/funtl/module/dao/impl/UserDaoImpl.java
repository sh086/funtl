package com.shooter.funtl.module.dao.impl;

import com.shooter.funtl.module.dao.UserDao;
import com.shooter.funtl.module.entiry.User;

public class UserDaoImpl implements UserDao {

    public User getUser(String email, String passWord) {
        //先根据loginId查询出用户信息，再比对loginPwd
        //不可直接根据loginId和loginPwd直接查询，防止SQL注入
        if("admin@qq.com".equals(email)){
            if("admin".equals(passWord)){
                User user = new User();
                user.setEmail("admin@qq.com");
                user.setPassWd("admin");
                user.setUserName("admin");
                return user;
            }
        }
        return null;
    }
}