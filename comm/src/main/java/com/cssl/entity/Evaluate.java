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
    public class Evaluate extends Model<Evaluate> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "evaluate_id", type = IdType.AUTO)
    private Integer evaluate_id;

    private Integer goods_id;

    private Integer user_id;

    private String evaluate_content;

    private Integer evaluate_star;

    private String evaluate_imgs;

    private LocalDateTime evaluate_time;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.evaluate_id;
    }

}
