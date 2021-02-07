package com.shooter.funtl.module.service.impl;

import com.shooter.funtl.module.dao.UserDao;
import com.shooter.funtl.module.entity.User;
import com.shooter.funtl.module.service.UserService;
import lombok.val;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User login(String email, String passWord) {
        val user = selectUserByEmail(email);
        if( user != null){
            // 名为密钥加盟
            String md5PassWd = DigestUtils.md5DigestAsHex(passWord.getBytes());
            if(md5PassWd.endsWith(user.getPassWord())){
                return user;
            }
        }
        return null;
    }

    @Override
    public User selectUserById(Long id) {
        val params = new User();
        params.setId(id);
        return userDao.selectUserByParams(params);
    }

    @Override
    public User selectUserByName(String userName) {
        val params = new User();
        params.setUserName(userName);
        return userDao.selectUserByParams(params);
    }

    @Override
    public List<User> selectUserByNameLike(String userNameLike) {
        return userDao.selectUserByUserNameLike(userNameLike);
    }

    @Override
    public User selectUserByEmail(String email) {
        val params = new User();
        params.setEmail(email);
        return userDao.selectUserByParams(params);
    }

    @Override
    public List<User> selectUserAll() {
        return userDao.selectUserAll();
    }

    @Override
    public void insert(User user) {
        userDao.insert(user);
    }

    @Override
    public void updateById(User user) {
        userDao.updateById(user);
    }

    @Override
    public void deleteById(Long id) {
        userDao.deleteById(id);
    }
}