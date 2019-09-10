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
    public class Category extends Model<Category> {

    private static final long serialVersionUID = 1L;

            @TableId(value = "category_id", type = IdType.AUTO)
    private Integer category_id;

    private String category_name;

    private Integer category_parent_id;

    private Integer category_level;

    private Integer standby1;

    private String standby2;


    @Override
    protected Serializable pkVal() {
        return this.category_id;
    }

}
