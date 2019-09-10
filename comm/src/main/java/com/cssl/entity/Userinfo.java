package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;


@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Userinfo extends Model<Userinfo> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id; //编号
    @TableField(value = "uid ")
    private Integer uid; //用户编号
    @TableField(value = "gid")
    private Integer gid; //成长值表
    @TableField(value = "sid")
    private Integer sid; //美豆积分值


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
