package com.cssl.entity;

import java.math.BigDecimal;

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

//优惠券基础配置表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Coupon extends Model<Coupon> {

    private static final long serialVersionUID = 1L;


    @TableId(value = "coupon_id", type = IdType.AUTO)
    private Integer id;                       //优惠券表编号

    @TableField(value = "category_id")
    private Integer categoryId;               //分类编号

    @TableField(value = "coupon_type")
    private Integer type;                 //所属类型1:满减  0:无门槛

    @TableField(value = "coupon_name")
    private String couponName;                //优惠券名称

    @TableField(value = "start_time")
    private Date startTime;            //开始时间

    @TableField(value = "end_time")
    private Date endTime;               //结束时间

    @TableField(value = "coupon_money")
    private BigDecimal couponMoney;               //优惠金额

    @TableField(value = "coupon_status")
    private Integer status;                   //状态(0表示未开始，1表示进行中，-1表示结束)

    @TableField(value = "coupon_remarks")
    private String remarks;                 //优惠券的说明

    @TableField(value = "full_money")
    private BigDecimal fullMoney;                //金额满多少

    @TableField(value = "coupon_count")
    private Integer couponCount;               //发放数量

    @TableField(value = "coupon_limit")
    private Integer couponLimit;                //每人限领

    @TableField(value = "coupon_type") //所属类型
    private Integer cType;

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
