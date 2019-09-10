package com.cssl.entity;

    import java.math.BigDecimal;
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
    public class Order_detail extends Model<Order_detail> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "detail_id", type = IdType.AUTO)
    private Integer detail_id;

    private Integer order_id;

    private Integer goods_id;

    private BigDecimal detail_money;

    private Integer detail_num;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.detail_id;
    }

}
