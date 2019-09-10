package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//成长值表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Growup extends Model<Growup> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "growup_id", type = IdType.AUTO)
    private Integer id;      //成长值编号

    @TableField(value = "user_id")
    private Integer userId;                   //用户编号

    @TableField(value = "growup_sum")
    private Integer growupSum;                   //总成长值


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
