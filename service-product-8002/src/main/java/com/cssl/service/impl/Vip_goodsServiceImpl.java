package com.cssl.service.impl;

import com.cssl.entity.VipGoods;
import com.cssl.mapper.Vip_goodsMapper;
import com.cssl.service.Vip_goodsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
public class Vip_goodsServiceImpl extends ServiceImpl<Vip_goodsMapper, VipGoods> implements Vip_goodsService {

    @Autowired
    private Vip_goodsMapper vip_goodsMapper;


    @Override
    public Page<Map<String, Object>> vipGoodsFindAll(Map<String, Object> map, int pageIndex, int pageSize) {
        Page<Map<String, Object>> page = PageHelper.startPage(pageIndex, pageSize,"goods_state desc,grade_id asc");
        vip_goodsMapper.vipGoodsFindAll(map);
        return page;
    }
}
