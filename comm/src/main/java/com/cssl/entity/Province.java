package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//省级表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Province extends Model<Province> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "province_id", type = IdType.AUTO)
    private Integer id;     //省编号
    @TableField(value = "province_name")
    private String name;   //省名称


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
