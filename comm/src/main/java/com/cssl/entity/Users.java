package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//用户表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Users extends Model<Users> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "user_id", type = IdType.AUTO)
    private Integer id;           //用户编号

    @TableField("user_name")
    private String userName;      //用户名

    @TableField("user_pwd")
    private String passWord;    // 用户密码

    @TableField("user_sex")
    private Integer sex;          //性别

    @TableField("user_birthday")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date birthday;          //生日

    @TableField("user_phone")
    private String phone;           //手机号码

    @TableField("user_email")
    private String email;             //邮箱

    @TableField("user_address")
    private String address;     //家庭住址

    @TableField("user_headimg")
    private String headImg;      //头像图片

    @TableField("user_time")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date time;                //注册时间

    @TableField("user_role")
    private Integer role;            //角色

    @TableField("user_logintime")
    @JsonFormat(pattern="yyyy-MM-dd")
    private  Date  loginTime;   //登录时间

    @TableField("user_dayLogin")
    private Integer dayLogin;  //今日是否登录过   0:未登录   1:已登录

    @TableField("user_infocomplete")
    private Integer infoComplete;  //信息完善度    0:未完善   1:已完善

    @TableField("user_signInTime")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date signInTime;                //签到时间

    @TableField("user_daySignIn")
    private Integer daySignIn;  //今日是否签到过   0:未签到  1:已签到

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
