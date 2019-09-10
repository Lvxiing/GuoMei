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
    public class Cart extends Model<Cart> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "cart_id", type = IdType.AUTO)
    private Integer cart_id;

    private Integer user_id;

    private Integer goods_id;

    private Integer cart_num;

    private BigDecimal cart_money;

    private BigDecimal cart_total;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.cart_id;
    }

}
