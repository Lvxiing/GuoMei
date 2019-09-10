package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.Date;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 *
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Users extends Model<Users> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "user_id", type = IdType.AUTO)
    private Integer user_id;

    private String user_name;

    private String user_pwd;

    private Integer user_sex;

    private Date user_birthday;

    private String user_phone;

    private String user_email;

    private String user_address;

    private String user_headimg;

    private Date user_time;

    private Integer user_role;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.user_id;
    }

}
