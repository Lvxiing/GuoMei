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
    public class City extends Model<City> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "city_id", type = IdType.AUTO)
    private Integer city_id;

    private Integer province_id;

    private String city_name;


    @Override
    protected Serializable pkVal() {
        return this.city_id;
    }

}
