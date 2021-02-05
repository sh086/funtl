package com.shooter.myshop.web.admin.service;

import com.shooter.myshop.domain.User;

public interface UserService {

    User login(String email, String passWord);

}
