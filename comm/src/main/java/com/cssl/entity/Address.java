package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//收货地址表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Address extends Model<Address> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "address_id", type = IdType.AUTO)
    private Integer id;     //收货地址编号

    @TableField(value = "province_id")
    private Integer provinceId;   //省编号

    @TableField(value = "city_id")
    private Integer cityId;      //市编号

    @TableField(value = "district_id")
    private Integer districtId;   //区编号

    @TableField(value = "street_id")
    private Integer streetId;   //街道编号

    @TableField(value = "user_id")
    private Integer userId;     //用户编号

    @TableField(value = "address_name")
    private String  userName;   //收货人姓名

    @TableField(value = "address_detail")
    private String address;    //详细地址

    @TableField(value = "user_phone")
    private String  phone;   //手机号码

    @TableField(value = "user_email")
    private String  email;   //邮箱

    @TableField(value = "address_isdefault")
    private Integer isdefault;    //是否默认

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
