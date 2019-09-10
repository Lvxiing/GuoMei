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

//会员商品表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Vip_goods extends Model<Vip_goods> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "vip_goods_id", type = IdType.AUTO)
    private Integer id;        //会员商品编号

    @TableField(value = "grade_id")
    private Integer gradeId;         //会员等级编号

    @TableField(value = "vip_time")
    private Date vipTime;

    @TableField(value = "goods_id")
    private Integer goodsId;               //商品编号

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
