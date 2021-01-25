package com.shooter.funtl.common.enums;

public enum CookieEnum {

    USER_INFO("userInfo","用户登录信息");

    private String value;

    private String desc;

    CookieEnum(String value, String desc) {
        this.value = value;
        this.desc = desc;
    }

    public String value() {
        return value;
    }

    public String desc() {
        return desc;
    }

}
