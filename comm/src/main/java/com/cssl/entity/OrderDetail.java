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

//订单明细表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class OrderDetail extends Model<OrderDetail> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "detail_id", type = IdType.AUTO)
    private Integer id;            //订单明细表编号

    @TableField(value = "order_id")
    private Integer orderId;             //订单编号

    @TableField(value = "goods_id")
    private Integer goodsId;             //商品编号

    @TableField(value = "detail_money")
    private BigDecimal money;              //价格

    @TableField(value = "detail_num")
    private Integer num;              //数量

    @TableField(value= "detail_status") //订单中商品的状态
    private Integer dstatus;

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
