package com.shooter.myshop.web.admin.service.impl;

import com.shooter.myshop.domain.User;
import com.shooter.myshop.web.admin.dao.UserDao;
import com.shooter.myshop.web.admin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    /**
     * 调用数据访问层中login的实现
     * */
    public User login(String loginId, String loginPwd) {
        return userDao.getUser(loginId,loginPwd);
    }
}