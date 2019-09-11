package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//美豆类型表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class ScoreType extends Model<ScoreType> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "scoreType_id", type = IdType.AUTO)
    private Integer id;     //美豆类型编号

    @TableField(value = "scoreType_name")
    private String typeName;               //类型名称

    @TableField(value = "scoreType_value")
    private Integer value;          //  对应增减值


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
