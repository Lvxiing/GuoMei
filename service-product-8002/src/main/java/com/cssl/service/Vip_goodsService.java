package com.cssl.service;

import com.cssl.entity.VipGoods;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.pagehelper.Page;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface Vip_goodsService extends IService<VipGoods> {

    //查询所有会员商品
    Page<Map<String,Object>> vipGoodsFindAll(Map<String,Object>map, int pageIndex, int pageSize);

    //查询所有会员商品
    Page<Map<String,Object>> vipSaleGoods(Map<String, Object> map);

}
