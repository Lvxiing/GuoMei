package com.cssl.mapper;

import com.cssl.entity.District;
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
public interface DistrictMapper extends BaseMapper<District> {
    //根据城市名查询区
    List<District> findAreaByCity(Integer city_id);
    //根据区Id回显区名称
    String findNameByDistrictId(Integer district_id);

}
