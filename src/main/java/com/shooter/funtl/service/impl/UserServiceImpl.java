package com.shooter.funtl.service.impl;

import com.shooter.funtl.dao.UserDao;
import com.shooter.funtl.dao.impl.UserDaoImpl;
import com.shooter.funtl.entiry.User;
import com.shooter.funtl.service.UserService;

public class UserServiceImpl implements UserService {
    private UserDao userDao = new UserDaoImpl();

    /**
     * 调用数据访问层中login的实现
     * */
    public User login(String loginId, String loginPwd) {
        return userDao.login(loginId,loginPwd);
    }
}
