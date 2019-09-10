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
    public class Orders extends Model<Orders> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "order_id", type = IdType.AUTO)
    private Integer order_id;

    private Integer address_id;

    private LocalDateTime pay_date;

    private LocalDateTime order_time;

    private BigDecimal order_total;

    private Integer order_status;

    private String order_no;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.order_id;
    }

}
