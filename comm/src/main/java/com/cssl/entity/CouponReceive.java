package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//优惠券领取记录表

@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class CouponReceive extends Model<CouponReceive> {

    private static final long serialVersionUID = 1L;


    @TableId(value = "receive_id", type = IdType.AUTO)
    private Integer id;                   //券领取编号

    @TableField(value = "coupon_id")
    private Integer couponId;               //优惠券表编号

    @TableField(value = "user_id")
    private Integer userId;                //用户编号

    @TableField(value = "create_time")
    private Date time;                  //领取时间

    @TableField(value = "status")
    private Integer status;                   //状态


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
