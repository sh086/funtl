package com.shooter.funtl.module.service.impl;

import com.shooter.funtl.common.context.SpringContext;
import com.shooter.funtl.module.dao.UserDao;
import com.shooter.funtl.module.dao.impl.UserDaoImpl;
import com.shooter.funtl.module.entity.User;
import com.shooter.funtl.module.service.UserService;

public class UserServiceImpl implements UserService {

    private UserDao userDao = SpringContext.getBean("userDao");

    /**
     * 调用数据访问层中login的实现
     * */
    public User login(String loginId, String loginPwd) {
        return userDao.getUser(loginId,loginPwd);
    }
}