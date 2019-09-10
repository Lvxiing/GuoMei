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
    public class Goods extends Model<Goods> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "goods_id", type = IdType.AUTO)
    private Integer goods_id;

    private Integer brand_id;

    private String goods_title;

    private String goods_sub_title;

    private String goods_main_img;

    private String goods_des_img;

    private String goods_des;

    private BigDecimal goods_price;

    private Integer goods_stock;

    private Integer goods_state;

    private Integer goods_seckill;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.goods_id;
    }

}
