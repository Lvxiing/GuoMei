package com.cssl.mapper;

import com.cssl.entity.City;
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
public interface CityMapper extends BaseMapper<City> {
    //根据省Id查询所有城市
    List<City> findCityByProvince(Integer province_id);
    //根据城市ID来回显城市名称
    String findNameByCityId(Integer city_id);
}
