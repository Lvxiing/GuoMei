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
 * 服务实现类
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
        Page<Map<String, Object>> page = PageHelper.startPage(pageIndex, pageSize, "goods_state desc,grade_id asc");
        vip_goodsMapper.vipGoodsFindAll(map);
        return page;
    }

    @Override
    public Page<Map<String, Object>> vipSaleGoods(Map<String, Object> map) {
        Integer pageSize = new Integer(map.get("pageSize").toString());
        Integer pageIndex = new Integer(map.get("pageIndex").toString());
        Integer bs = -1;
        Page<Map<String, Object>> page;
        if (map.get("bs") != null && !"".equals(map.get("bs"))) {
            bs = new Integer(map.get("bs").toString());
        }
        if (bs == 1) { //表示按照销量
            page = PageHelper.startPage(pageIndex, pageSize);
            vip_goodsMapper.vipSaleGoods(map);
            return page;
        }
        //表示按照时间
        page = PageHelper.startPage(pageIndex, pageSize, "vip_time DESC");
        vip_goodsMapper.vipGoodsFindAllqian(map);
        return page;
    }

    @Override
    public Map<String, Object> vipInfo(Integer gid) {
        return vip_goodsMapper.vipInfo(gid);
    }
}
