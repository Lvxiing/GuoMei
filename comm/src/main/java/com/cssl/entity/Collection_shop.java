package com.cssl.entity;

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

//收藏店铺表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Collection_shop extends Model<Collection_shop> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "collect_shop_id", type = IdType.AUTO)
    private Integer id;                    //店铺编号

    @TableField(value = "shop_id")
    private Integer shopId;              //收藏店铺编号

    @TableField(value = "collect_shop_time")
    private Date time;         //收藏时间

    @TableField(value = "user_id")
    private Integer userId;             //用户编号


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
