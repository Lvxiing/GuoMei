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

//购物车表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Cart extends Model<Cart> {

    private static final long serialVersionUID = 1L;


    @TableId(value = "cart_id", type = IdType.AUTO)
    private Integer id;              //购物车编号

    @TableField(value = "user_id")
    private Integer userId;               //用户编号

    @TableField(value = "goods_id")
    private Integer goodsId;                //商品编号

    @TableField(value = "cart_num")
    private Integer num;                //购买数量

    @TableField(value = "cart_money")
    private BigDecimal price;                  //价格

    @TableField(value = "cart_total")
    private BigDecimal total;               //总金额(小计)


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
