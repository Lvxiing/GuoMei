package com.cssl.service.impl;

import com.cssl.entity.City;
import com.cssl.mapper.CityMapper;
import com.cssl.service.CityService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
public class CityServiceImpl extends ServiceImpl<CityMapper, City> implements CityService {

    @Autowired
    private CityMapper cityMapper;
    @Override
    public List<City> findCityByProvince(Integer province_id) {
        return cityMapper.findCityByProvince(province_id);
    }

    @Override
    public String findNameByCityId(Integer city_id) {
        return cityMapper.findNameByCityId(city_id);
    }
}
