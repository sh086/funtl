package com.shooter.funtl.module.dao.impl;

import com.shooter.funtl.module.dao.UserDao;
import com.shooter.funtl.module.entiry.User;
import org.springframework.stereotype.Repository;

@Repository(value = "userDao")
public class UserDaoImpl implements UserDao {

    public User getUser(String email, String passWord) {

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
