package com.shooter.funtl.module.dao;

import com.shooter.funtl.module.entity.User;

import java.util.List;

public interface UserDao {

    /**按条件查询用户信息**/
    User selectUserByParams(User params);

    /**按条件查询用户信息**/
    List<User> selectUserByUserNameLike(String userNameLike);

    /**查询全部用户信息**/
    List<User> selectUserAll();

    /**新增用户信息**/
    void insert(User user);

    /**更新用户信息**/
    void updateById(User user);

    /**删除用户信息**/
    void deleteById(Long id);

}
