package com.cssl.mapper;

import com.cssl.entity.Userinfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

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
public interface UserinfoMapper extends BaseMapper<Userinfo> {

    //查询会员
    List<Map> findVip(Map map);

}
