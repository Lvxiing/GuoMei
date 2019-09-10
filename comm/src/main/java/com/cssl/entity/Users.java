package com.cssl.entity;

    import com.baomidou.mybatisplus.annotation.IdType;
    import com.baomidou.mybatisplus.extension.activerecord.Model;
    import com.baomidou.mybatisplus.annotation.TableId;
    import java.time.LocalDateTime;
    import java.io.Serializable;
    import java.util.Date;

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
    public class Users extends Model<Users> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "user_id", type = IdType.AUTO)
    private Integer id;           //用户编号

    private String userName;      //用户名

    private String passWord;    //用户密码

    private Integer sex;          //性别

    private Date  birthday;          //生日

    private String phone;           //手机号码

    private String  email;             //邮箱

    private String   address;     //家庭住址

    private String  headImg;      //头像图片

    private Date time;                //注册时间

    private Integer role;            //角色

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
