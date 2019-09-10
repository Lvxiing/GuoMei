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
    public class Score_type extends Model<Score_type> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "scoreType_id", type = IdType.AUTO)
    private Integer scoreType_id;

    private String scoreType_name;

    private Integer scoreType_value;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.scoreType_id;
    }

}
