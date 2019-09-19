package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.Date;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//收藏表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName(value = "collection")
public class Collections extends Model<Collections> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "collection_id", type = IdType.AUTO)
    private Integer id;     //收藏编号

    @TableField(value = "user_id")
    private Integer uid;            //用户编号

    @TableField(value = "goods_id")
    private Integer goodsId;             //商品编号

    @TableField(value = "collection_time")
    private Date ctime;             //收藏时间


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
