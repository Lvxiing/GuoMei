package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//区级表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class District extends Model<District> {

    private static final long serialVersionUID = 1L;
    @TableId(value = "district_id", type = IdType.AUTO)
    private Integer id;    //区编号

    @TableField(value = "city_id")
    private Integer cid;      //城市编号

    @TableField(value = "district_name")
    private String dname;      //区名称


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
