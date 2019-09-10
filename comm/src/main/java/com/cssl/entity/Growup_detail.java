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
    public class Growup_detail extends Model<Growup_detail> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "gdetail_id", type = IdType.AUTO)
    private Integer gdetail_id;

    private Integer type_id;

    private Integer growup_id;

    private Integer user_id;

    private LocalDateTime gdetail_time;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.gdetail_id;
    }

}
