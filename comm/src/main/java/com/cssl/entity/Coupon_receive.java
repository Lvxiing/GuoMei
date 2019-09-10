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
    public class Coupon_receive extends Model<Coupon_receive> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "receive_id", type = IdType.AUTO)
    private Integer receive_id;

    private Integer coupon_id;

    private Integer user_id;

    private LocalDateTime create_time;

    private Integer status;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.receive_id;
    }

}
