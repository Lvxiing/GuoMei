package com.cssl.mapper;

import com.cssl.entity.Goods;
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
public interface GoodsMapper extends BaseMapper<Goods> {

    //查询所有商品
    List<Map<String,Object>> findGoods(Map<String,Object> map);

    //新增商品
    int addGoods(Goods goods);

    //修改商品状态
    int upStateGoods(Map<String,Object> map);

    //根据分类名称查询该分类下的所有品牌商品的热卖商品
    List<Goods> findGoodsByCategoryName(String categoryName);
}
