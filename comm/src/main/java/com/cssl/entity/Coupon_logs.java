package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

////优惠卷消费记录
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Coupon_logs extends Model<Coupon_logs> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "logs_id", type = IdType.AUTO)
    private Integer id;                //券消费编号

    @TableField(value = "user_id")
    private Integer userId;               //用户编号

    @TableField(value = "coupon_id")
    private Integer couponId;               //优惠券表编号

    @TableField(value = "order_id")
    private Integer orderId;               //订单编号

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
