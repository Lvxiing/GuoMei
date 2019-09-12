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
//商品表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Goods extends Model<Goods> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "goods_id", type = IdType.AUTO)
    private Integer id;       //商品编号

    @TableField(value = "brand_id")
    private Integer bid;            //品牌编号

    @TableField(value = "goods_title")
    private String title;         //商品名称

    @TableField(value = "goods_sub_title")
    private String subTitle;          //副标题

    @TableField(value = "goods_main_img")
    private String mainImg;          //商品主图

    @TableField(value = "goods_des_img")
    private String desImg;          //详情图片

    @TableField(value = "goods_des")
    private String des;            //商品描述

    @TableField(value = "goods_price")
    private BigDecimal price;          //商品价格

    @TableField(value = "goods_stock")
    private Integer stock;              //库存

    @TableField(value = "goods_state")
    private Integer state;          //状态

    @TableField(value = "goods_seckill")
    private Integer seckill;             //销量

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
