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

//等级表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Grade extends Model<Grade> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "grade_id", type = IdType.AUTO)
    private Integer id;               //等级编号

    @TableField(value = "grade_name")
    private String gradeName;           //等级名称

    @TableField(value = "low")
    private Integer low;                 //最低成长值

    @TableField(value = "high")
    private Integer high;            //最高成长值

    @TableField(value = "Discount _money")
    private BigDecimal money;


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
