package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

////礼包领取表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class GiftReceive extends Model<GiftReceive> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "giftReceive_id", type = IdType.AUTO)
    private Integer id;        //礼包领取表编号

    @TableField(value = "gift_id")
    private Integer giftId;         //礼包编号

    @TableField(value = "user_id")
    private Integer userId;       //用户编号


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
