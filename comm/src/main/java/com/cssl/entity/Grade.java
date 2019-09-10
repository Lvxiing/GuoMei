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
    public class Grade extends Model<Grade> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "grade_id", type = IdType.AUTO)
    private Integer grade_id;

    private String grade_name;

    private Integer low;

    private Integer high;

    private BigDecimal Discount_money;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.grade_id;
    }

}
