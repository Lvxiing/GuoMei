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

//礼包表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Gift extends Model<Gift> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "gift_id", type = IdType.AUTO)
    private Integer id;       //礼包编号

    @TableField(value = "gift_name")
    private String giftName;           //礼包名称

    @TableField(value = "create_time")
    private Date time;            //领取时间

    @TableField(value = "end_time")
    private Date endTime;             //过期时间

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
