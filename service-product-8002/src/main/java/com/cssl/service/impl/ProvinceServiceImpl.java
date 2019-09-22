package com.cssl.service.impl;

import com.cssl.entity.Province;
import com.cssl.mapper.ProvinceMapper;
import com.cssl.service.ProvinceService;
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
public class ProvinceServiceImpl extends ServiceImpl<ProvinceMapper, Province> implements ProvinceService {

    @Autowired
    private ProvinceMapper provinceMapper;

    @Override
    public List<Province> findProvince() {
        return provinceMapper.findProvince();
    }

    @Override
    public String findNameByProvinceId(Integer province_id) {
        return provinceMapper.findNameByProvinceId(province_id);
    }
}
