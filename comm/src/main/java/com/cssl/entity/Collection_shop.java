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
    public class Collection_shop extends Model<Collection_shop> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "collect_shop_id", type = IdType.AUTO)
    private Integer collect_shop_id;

    private Integer shop_id;

    private LocalDateTime collect_shop_time;

    private Integer user_id;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.collect_shop_id;
    }

}
