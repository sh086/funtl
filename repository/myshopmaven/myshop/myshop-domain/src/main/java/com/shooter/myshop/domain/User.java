package com.shooter.myshop.domain;

import lombok.Data;

import java.io.Serializable;

@Data
public class User implements Serializable{

    private String userName;

    private String passWd;

    private String email;

    private Boolean isRemember;

}
