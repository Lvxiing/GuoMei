package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.Date;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//成长值明细表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Growup_detail extends Model<Growup_detail> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "gdetail_id", type = IdType.AUTO)
    private Integer id;              //明细编号

    @TableField(value = "type_id")
    private Integer typeId;              //成长值类型编号

    @TableField(value = "growup_id")
    private Integer growupId;               //成长值编号

    @TableField(value = "user_id")
    private Integer userId;               //用户编号

    @TableField(value = "gdetail_time")
    private Date time;              //获得日期


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
