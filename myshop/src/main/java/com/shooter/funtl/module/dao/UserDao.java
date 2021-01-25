package com.shooter.funtl.module.dao;


import com.shooter.funtl.module.entiry.User;

public interface UserDao {

    User getUser(String email, String passWord);

}