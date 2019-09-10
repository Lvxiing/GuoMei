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
    public class Address extends Model<Address> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "address_id", type = IdType.AUTO)
    private Integer address_id;

    private Integer province_id;

    private Integer city_id;

    private Integer district_id;

    private Integer street_id;

    private Integer user_id;

    private String address_name;

    private String address_detail;

    private String user_phone;

    private String user_email;

    private Integer address_isdefault;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.address_id;
    }

}
