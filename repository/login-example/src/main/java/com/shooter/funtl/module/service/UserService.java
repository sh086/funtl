package com.shooter.funtl.module.service;

import com.shooter.funtl.module.entiry.User;

public interface UserService {

    User login(String loginId, String loginPwd);

}
