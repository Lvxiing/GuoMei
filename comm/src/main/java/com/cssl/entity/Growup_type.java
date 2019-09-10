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
    public class Growup_type extends Model<Growup_type> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "type_id", type = IdType.AUTO)
    private Integer type_id;

    private String type_name;

    private Integer type_value;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.type_id;
    }

}
