package com.cssl.entity;

    import java.math.BigDecimal;
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
    public class Coupon extends Model<Coupon> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "coupon_id", type = IdType.AUTO)
    private Integer coupon_id;

    private Integer category_id;

    private String coupon_name;

    private LocalDateTime start_time;

    private LocalDateTime end_time;

    private BigDecimal coupon_money;

    private Integer coupon_status;

    private String coupon_remarks;

    private BigDecimal full_money;

    private Integer coupon_count;

    private Integer coupon_scope;

    private Integer coupon_limit;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.coupon_id;
    }

}
