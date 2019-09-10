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
    public class Province extends Model<Province> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "province_id", type = IdType.AUTO)
    private Integer province_id;

    private String province_name;


    @Override
    protected Serializable pkVal() {
        return this.province_id;
    }

}
