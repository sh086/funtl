package com.shooter.funtl.module.entity;

import lombok.Data;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class User implements Serializable{

    private Long id;

    private String userName;

    private String passWord;

    private String email;

    private Long phone;

    private LocalDateTime createTime;

    private LocalDateTime updateTime;

}
