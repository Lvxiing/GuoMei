package com.cssl.service;

import com.cssl.entity.Goods;
import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.SolrPo;
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
    List<Goods> findGoodsByCategoryName(Map<String,Object>map);


    //根据当前第二级分类编号查询该分类下的所有第三级分类的热销榜
    List<Map<String,Object>> findSaleByCategoryId(Integer cid);

    //根据当前一级分类编号查询该分类下的所有商品的热销榜
    List<Map<String,Object>> findSaleAll(Integer cid);

    //首页的商品热销榜
    List<Map<String,Object>> indexSaleGoods();

    //商品详情热销榜
    List<Goods> goodsInfoSale(Integer cid);

    //查询所有商品
    Page<Map<String,Object>> categoryGoodsShow(Map<String,Object> map,List list);

    //根据销量显示商品
    List<Map<String,Object>> categorySaleGoodsShow(List list);

    //根据分类显示商品排行榜
    List<Goods> categorySalaRankingGoods(List list);


    List<SolrPo> findAllSolrData();


    List<SolrPo> findSalGoods(List list);
}
