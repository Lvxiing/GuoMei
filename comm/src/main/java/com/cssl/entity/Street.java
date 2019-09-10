package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//街道表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Street extends Model<Street> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "street_id", type = IdType.AUTO)
    private Integer id;      //街道编号

    @TableField(value = "district_id")
    private Integer did;      //区级编号

    @TableField(value = "street_name")
    private String sname;       //街道名称


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
