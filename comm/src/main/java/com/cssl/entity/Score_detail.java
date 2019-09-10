package com.cssl.entity;

    import com.baomidou.mybatisplus.annotation.IdType;
    import com.baomidou.mybatisplus.extension.activerecord.Model;
    import com.baomidou.mybatisplus.annotation.TableId;
    import java.time.LocalDateTime;
    import java.io.Serializable;
    import lombok.Data;
    import lombok.EqualsAndHashCode;
    import lombok.experimental.Accessors;

/**
* <p>
    * 
    * </p>
*
* @author lx
* @since 2019-09-10
*/
    @Data
        @EqualsAndHashCode(callSuper = false)
    @Accessors(chain = true)
    public class Score_detail extends Model<Score_detail> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "sdetail_id", type = IdType.AUTO)
    private Integer sdetail_id;

    private Integer score_id;

    private Integer user_id;

    private Integer scoreType_id;

    private LocalDateTime get_time;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.sdetail_id;
    }

}
