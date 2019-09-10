package com.cssl.entity;

    import com.baomidou.mybatisplus.annotation.IdType;
    import com.baomidou.mybatisplus.extension.activerecord.Model;
    import com.baomidou.mybatisplus.annotation.TableId;
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
    public class Coupon_logs extends Model<Coupon_logs> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "logs_id", type = IdType.AUTO)
    private Integer logs_id;

    private Integer user_id;

    private Integer coupon_id;

    private Integer order_id;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.logs_id;
    }

}
