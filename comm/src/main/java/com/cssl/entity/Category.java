package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//商品分类表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Category extends Model<Category> {

    private static final long serialVersionUID = 1L;


    @TableId(value = "category_id", type = IdType.AUTO)
    private Integer cid;    //分类编号

    @TableField(value = "category_name")
    private String name;       //分类名称

    @TableField(value = "category_parent_id")
    private Integer parentId;     //分类父编号

    @TableField(value = "category_level")
    private Integer parentLevel;     //分类级层


    @Override
    protected Serializable pkVal() {
        return this.cid;
    }

}
