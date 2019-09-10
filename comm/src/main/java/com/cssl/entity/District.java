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
    public class District extends Model<District> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "district_id", type = IdType.AUTO)
    private Integer district_id;

    private Integer city_id;

    private String district_name;


    @Override
    protected Serializable pkVal() {
        return this.district_id;
    }

}
