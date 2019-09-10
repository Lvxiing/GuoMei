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

//秒杀表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Seckill extends Model<Seckill> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "seckill_id", type = IdType.AUTO)
    private Integer id;            //秒杀商品编号

    @TableField(value = "goods_id")
    private Integer goodsId;      //商品编号

    @TableField(value = "seckil_number")
    private Integer number;     //库存数量

    @TableField(value = "start_time")
    private Date startTime;          //秒杀开始时间

    @TableField(value = "end_time")
    private Date endTime;                 //秒杀结束时间

    @TableField(value = "create_time")
    private Date time;              //创建时间


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
