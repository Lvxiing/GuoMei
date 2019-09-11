package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//秒杀成功明细表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SeckillDes extends Model<SeckillDes> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "seckill_des_id", type = IdType.AUTO)
    private Integer id;     //秒杀成功明细编号

    @TableField(value = "user_id")
    private Integer userId;               //用户编号

    @TableField(value = "goods_id")
    private Integer goodsId;                //商品编号

    @TableField(value = "create_time")
    private Date time;             //创建时间(秒杀成功的时间)


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
