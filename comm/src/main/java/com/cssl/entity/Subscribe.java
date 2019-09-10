package com.cssl.entity;

import java.math.BigDecimal;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//商品订阅表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Subscribe extends Model<Subscribe> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "subscribe_id", type = IdType.AUTO)
    private Integer id;                  //商品订阅编号

    @TableField(value = "goods_id")
    private Integer goodsId;                 //商品编号

    @TableField(value = "low_money")
    private BigDecimal lowMoney;           //低于价格

    @TableField(value = "subscribe_email")
    private String email;             //电子邮箱


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
