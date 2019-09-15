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

////评价表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Evaluate extends Model<Evaluate> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "evaluate_id", type = IdType.AUTO)
    private Integer id;                 //评价编号

    @TableField(value = "goods_id")
    private Integer goodsId;           //商品编号

    @TableField(value = "user_id")
    private Integer userId;              //用户编号

    @TableField(value = "evaluate_content")
    private String content;           //评价内容

    @TableField(value = "evaluate_star")
    private Integer star;             //星级

    @TableField(value = "evaluate_imgs")
    private String imgs;             //图片

    @TableField(value = "evaluate_time")
    private Date time;             //评价时间

    @TableField(value = "order_id") //订单编号
    private Integer oid;


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
