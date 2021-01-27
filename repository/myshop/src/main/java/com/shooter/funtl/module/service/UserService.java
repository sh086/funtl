package com.shooter.funtl.module.service;

import com.shooter.funtl.module.entity.User;

public interface UserService {

    User login(String email, String passWord);

}
