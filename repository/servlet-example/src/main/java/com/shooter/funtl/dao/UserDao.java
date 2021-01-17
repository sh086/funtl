package com.shooter.funtl.dao;

import com.shooter.funtl.entiry.User;

public interface UserDao {
    User login(String loginId, String loginPwd);
}