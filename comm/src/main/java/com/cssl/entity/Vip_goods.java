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
    public class Vip_goods extends Model<Vip_goods> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "vip_goods_id", type = IdType.AUTO)
    private Integer vip_goods_id;

    private Integer grade_id;

    private LocalDateTime vip_time;

    private Integer goods_id;


    @Override
    protected Serializable pkVal() {
        return this.vip_goods_id;
    }

}
