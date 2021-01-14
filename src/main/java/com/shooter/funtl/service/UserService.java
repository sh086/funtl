package com.shooter.funtl.service;

import com.shooter.funtl.entiry.User;

public interface UserService {
    User login(String loginId, String loginPwd);
}
