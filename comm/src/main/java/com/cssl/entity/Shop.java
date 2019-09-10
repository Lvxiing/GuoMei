package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//店铺表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Shop extends Model<Shop> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "shop_id", type = IdType.AUTO)
    private Integer id;              //店铺编号

    @TableField(value = "shop_name")
    private String shopName;            //店铺名称

    @TableField(value = "shop_img")
    private String shopImg;                 //店铺主图

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
