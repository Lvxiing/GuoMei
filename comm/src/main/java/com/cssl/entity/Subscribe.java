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
    public class Subscribe extends Model<Subscribe> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "subscribe_id", type = IdType.AUTO)
    private Integer subscribe_id;

    private Integer goods_id;

    private BigDecimal low_money;

    private String subscribe_email;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.subscribe_id;
    }

}
