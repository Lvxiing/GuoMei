package com.cssl.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.Users;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface UserMapper extends BaseMapper<Users> {

    //查询用户
    List<Users> findUsers(@Param("userName") String userName);

    //查询会员
    List<Map> findVip(Map map);

}
