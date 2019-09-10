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
    public class Collections extends Model<Collections> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "collection_id", type = IdType.AUTO)
    private Integer collection_id;

    private Integer user_id;

    private Integer goods_id;

    private LocalDateTime collection_time;


    @Override
    protected Serializable pkVal() {
        return this.collection_id;
    }

}
