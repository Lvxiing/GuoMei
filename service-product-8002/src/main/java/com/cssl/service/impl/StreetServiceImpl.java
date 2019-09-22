package com.cssl.service.impl;

import com.cssl.entity.Street;
import com.cssl.mapper.StreetMapper;
import com.cssl.service.StreetService;
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
public class StreetServiceImpl extends ServiceImpl<StreetMapper, Street> implements StreetService {

    @Autowired
    private StreetMapper streetMapper;
    @Override
    public List<Street> findStreetByArea(Integer district_id) {
        return streetMapper.findStreetByArea(district_id);
    }

    @Override
    public String findNameByStreetId(Integer street_id) {
        return streetMapper.findNameByStreetId(street_id);
    }
}
