package com.cssl.service.impl;

import com.cssl.entity.GrowupDetail;
import com.cssl.mapper.Growup_detailMapper;
import com.cssl.service.Growup_detailService;
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
public class Growup_detailServiceImpl extends ServiceImpl<Growup_detailMapper, GrowupDetail> implements Growup_detailService {

    @Autowired
    private Growup_detailMapper growup_detailMapper;

    @Override
    public int saveGrowupdetail(Map map) {
        return growup_detailMapper.saveGrowupdetail(map);
    }
}
