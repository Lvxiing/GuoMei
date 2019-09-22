package com.cssl.mapper;

import com.cssl.entity.Street;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface StreetMapper extends BaseMapper<Street> {
    //通过区id来查询街
    List<Street> findStreetByArea(Integer district_id);

    //通过街Id查询街名称
    String findNameByStreetId(Integer street_id);
}
