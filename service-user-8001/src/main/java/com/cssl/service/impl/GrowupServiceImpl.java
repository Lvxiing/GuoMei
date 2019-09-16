package com.cssl.service.impl;

import com.cssl.entity.Growup;
import com.cssl.mapper.GrowupMapper;
import com.cssl.mapper.UserinfoMapper;
import com.cssl.service.GrowupService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
@Transactional
public class GrowupServiceImpl extends ServiceImpl<GrowupMapper, Growup> implements GrowupService {

    @Autowired
    private GrowupMapper growupMapper;

    @Override
    public int updateGrowupSum(Map map) {
        return growupMapper.updateGrowupSum(map);
    }
}
