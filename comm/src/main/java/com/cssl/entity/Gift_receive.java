package com.cssl.entity;

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
    public class Gift_receive extends Model<Gift_receive> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "giftReceive_id", type = IdType.AUTO)
    private Integer giftReceive_id;

    private Integer gift_id;

    private Integer user_id;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.giftReceive_id;
    }

}