package com.cssl.entity;

import java.math.BigDecimal;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//订单表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Orders extends Model<Orders> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "order_id", type = IdType.AUTO)
    private Integer id;             //订单编号

    @TableField(value = "address_id")
    private Integer addressId;            //收货地址编号

    @TableField(value = "pay_date")
    private Date payDate;              //支付时间

    @TableField(value = "order_time")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date orderTime;                //订单创建时间

    @TableField(value = "order_total")
    private BigDecimal total;              //订单总价

    @TableField(value = "order_status")
    private Integer status;              //订单状态

    @TableField(value = "order_no")
    private String orderNo;             //订单号

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
