package com.shooter.funtl.module.entiry;

import lombok.Data;

import java.io.Serializable;

@Data
public class User implements Serializable {

    private String userName;

    private String passWd;

    private String email;

    private Boolean isRemember;
}
