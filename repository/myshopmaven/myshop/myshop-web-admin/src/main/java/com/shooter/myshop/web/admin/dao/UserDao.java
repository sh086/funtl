package com.shooter.myshop.web.admin.dao;

import com.shooter.myshop.domain.User;

public interface UserDao {

    User getUser(String email, String passWord);

}
