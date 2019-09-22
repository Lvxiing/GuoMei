package com.cssl.service.impl;

import com.cssl.entity.District;
import com.cssl.mapper.DistrictMapper;
import com.cssl.service.DistrictService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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
public class DistrictServiceImpl extends ServiceImpl<DistrictMapper, District> implements DistrictService {

    @Autowired
    private DistrictMapper districtMapper;

    @Override
    public List<District> findAreaByCity(Integer city_id) {
        return districtMapper.findAreaByCity(city_id);
    }

    @Override
    public String findNameByDistrictId(Integer district_id) {
        return districtMapper.findNameByDistrictId(district_id);
    }
}
