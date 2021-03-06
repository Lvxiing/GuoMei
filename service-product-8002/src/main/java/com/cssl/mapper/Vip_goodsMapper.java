package com.cssl.mapper;

import com.cssl.entity.VipGoods;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface Vip_goodsMapper extends BaseMapper<VipGoods> {

    //查询所有会员商品
    List<Map<String,Object>> vipGoodsFindAll(Map<String,Object> map);

    //根据销量显示商品
    List<Map<String,Object>> vipSaleGoods(Map<String,Object> map);

    //查询所有会员商品
    List<Map<String,Object>> vipGoodsFindAllqian(Map<String,Object> map);

    //根据商品编号查询会员商品详情
    Map<String,Object> vipInfo(Integer gid);
}
