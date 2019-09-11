package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

//美豆明细表
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class ScoreDetail extends Model<ScoreDetail> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sdetail_id", type = IdType.AUTO)
    private Integer id;             //美豆明细编号

    @TableField(value = "score_id")
    private Integer scoreId;             //积分记录编号

    @TableField(value = "user_id")
    private Integer userId;                //用户编号

    @TableField(value = "scoreType_id")
    private Integer scoreTypeId;              //美豆类型编号

    @TableField(value = "get_time")
    private Date getTime;                  //获得的时间


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
