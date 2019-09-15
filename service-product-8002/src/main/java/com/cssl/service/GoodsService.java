package com.cssl.service;

import com.cssl.entity.Goods;
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
public interface GoodsService extends IService<Goods> {

    //查询所有商品
    Page<Map<String,Object>> findGoods(Map<String,Object>map,int pageIndex,int pageSize);

    //新增商品
    int addGoods(Goods goods);

    //修改商品状态
    int upStateGoods(Map<String,Object> map);

    //根据分类名称查询该分类下的所有品牌商品的热卖商品
    List<Goods> findGoodsByCategoryName(List list);

    //根据分类名称查询该分类下的所有品牌商品的新品抢先
    List<Goods> findGoodsNewByCategoryName(List list);

    //根据分类名称查询该分类下的所有品牌商品的畅想低价
    List<Goods> ListfindGoodsLowPrice(List list);
}
