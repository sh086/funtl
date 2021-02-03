package com.shooter.funtl.module.service.impl;

import com.shooter.funtl.module.dao.UserDao;
import com.shooter.funtl.module.entity.User;
import com.shooter.funtl.module.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

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