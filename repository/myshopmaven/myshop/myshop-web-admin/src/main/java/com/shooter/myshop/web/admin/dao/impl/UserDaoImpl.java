package com.shooter.myshop.web.admin.dao.impl;

import com.shooter.myshop.domain.User;
import com.shooter.myshop.web.admin.dao.UserDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {

    private static final Logger logger = LoggerFactory.getLogger(UserDaoImpl.class);

    public User getUser(String email, String passWord) {

        //先根据loginId查询出用户信息，再比对loginPwd
        //不可直接根据loginId和loginPwd直接查询，防止SQL注入
        if("admin@qq.com".equals(email)){
            if("admin".equals(passWord)){
                logger.info("用户：{} 登录成功",email);
                User user = new User();
                user.setEmail("admin@qq.com");
                user.setPassWd("admin");
                user.setUserName("admin");
                return user;
            }
        }
        return null;
    }
}
