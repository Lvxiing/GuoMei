package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//成长值类型表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Growup_type extends Model<Growup_type> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "type_id", type = IdType.AUTO)
    private Integer id;                  //类型编号

    @TableField(value = "type_name")
    private String name;              //类型名称

    @TableField(value = "type_value")
    private Integer value;            //所获成长值


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
