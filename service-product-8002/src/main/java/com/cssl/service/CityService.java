package com.cssl.service;

import com.cssl.entity.City;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface CityService extends IService<City> {
    //通过省份查询城市
    List<City> findCityByProvince(Integer province_id);
    //根据城市ID来回显城市名称
    String findNameByCityId(Integer city_id);
}
