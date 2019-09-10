package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.Date;

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
    private Date time;                //注册时间

    @TableField("user_role")
    private Integer role;            //角色

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
