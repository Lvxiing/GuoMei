package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//积分表
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Score extends Model<Score> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "score_id", type = IdType.AUTO)
    private Integer id;               //积分记录编号

    @TableField(value = "user_id")
    private Integer userId;            //用户编号

    @TableField(value = "score_sum")
    private Integer scores;             //总积分

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
