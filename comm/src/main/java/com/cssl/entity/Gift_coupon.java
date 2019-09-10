package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//礼包券
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Gift_coupon extends Model<Gift_coupon> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "giftCoupon_id", type = IdType.AUTO)
    private Integer id;      //礼包券编号

    @TableField(value = "gift_id")
    private Integer giftId;        //礼包编号

    @TableField(value = "coupon_id")
    private Integer couponId;        //优惠券表编号


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
