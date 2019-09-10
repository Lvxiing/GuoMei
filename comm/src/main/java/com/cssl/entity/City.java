package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;


//市级表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class City extends Model<City> {
    private static final long serialVersionUID = 1L;

    @TableId(value = "city_id", type = IdType.AUTO)
    private Integer id;       //城市编号

    @TableField(value = "province_id")
    private Integer pid;          //省编号

    @TableField(value = "city_name")
    private String cname;       //城市名称


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
