package com.cssl.service.impl;

import com.cssl.entity.Goods;
import com.cssl.entity.SolrPo;
import com.cssl.mapper.GoodsMapper;
import com.cssl.service.GoodsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
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
public class GoodsServiceImpl extends ServiceImpl<GoodsMapper, Goods> implements GoodsService {

    @Autowired
    private GoodsMapper goodsMapper;

    @Override
    public Page<Map<String, Object>> findGoods(Map<String, Object> map, int pageIndex, int pageSize) {
        Page<Map<String, Object>> page = PageHelper.startPage(pageIndex, pageSize);
        goodsMapper.findGoods(map);
        return page;
    }

    @Override
    public int addGoods(Goods goods) {
        return goodsMapper.addGoods(goods);
    }

    @Override
    public int upStateGoods(Map<String, Object> map) {
        return goodsMapper.upStateGoods(map);
    }

    @Override
    public List<Goods> findGoodsByCategoryName(Map<String, Object> map) {
        if(map.get("bs")!=null && "sale".equals(map.get("bs"))){
            return goodsMapper.findSaleGoodsByCategoryName(map);
        }
        return goodsMapper.findGoodsByCategoryName(map);
    }


    @Override
    public List<Map<String, Object>> findSaleByCategoryId(Integer cid) {
        return goodsMapper.findSaleByCategoryId(cid);
    }

    @Override
    public List<Map<String, Object>> findSaleAll(Integer cid) {
        return goodsMapper.findSaleAll(cid);
    }

    @Override
    public List<Map<String, Object>> indexSaleGoods() {
        return goodsMapper.indexSaleGoods();
    }

    @Override
    public List<Goods> goodsInfoSale(Integer cid) {
        return goodsMapper.goodsInfoSale(cid);
    }

    @Override
    public Page<Map<String, Object>> categoryGoodsShow(Map<String, Object> map, List list) {
        Page<Map<String, Object>> page;
        Integer pageIndex = new Integer(map.get("pageIndex").toString());
        Integer pageSize = new Integer(map.get("pageSize").toString());
        Integer bs = -1;
        if (map.get("bs") != null && !"".equals(map.get("bs"))) {
            bs = new Integer(map.get("bs").toString());
        }
        Map param = new HashMap();
        param.put("list", list);
        if (map.get("price") != null && !"".equals(map.get("price"))) {
            String price = map.get("price").toString();
            String[] split = price.split("-");           //如果切割后的长度等于2 就说明这是一个价格区间
            if (split.length == 2) {
                param.put("low",split[0]);
                param.put("high",split[1]);
            } else {
                param.put("low",split[0]);
            }
        }
        String sort = null;
        if (bs == 1) { //表示销量
            page = PageHelper.startPage(pageIndex, pageSize);
            goodsMapper.categorySaleGoodsShow(list);
            return page;
        }
        if (bs == 2) { //表示新品
            sort = "goods_create_time DESC";
        }
        if (bs == 3) { //表示低价
            sort = "goods_price asc";
        }
        if (bs == 4) { //表示高价
            sort = "goods_price DESC";
        }
        if (sort == null) {
            page = PageHelper.startPage(pageIndex, pageSize);
        } else {
            page = PageHelper.startPage(pageIndex, pageSize, sort);
        }
        goodsMapper.categoryGoodsShow(param);
        return page;
    }

    @Override
    public List<Map<String, Object>> categorySaleGoodsShow(List list) {
        return goodsMapper.categorySaleGoodsShow(list);
    }

    @Override
    public List<Goods> categorySalaRankingGoods(List list) {
        return goodsMapper.categorySalaRankingGoods(list);
    }

    @Override
    public List<SolrPo> findAllSolrData() {
        return goodsMapper.findAllSolrData();
    }

    @Override
    public List<SolrPo> findSalGoods(List list) {
        return goodsMapper.findSalGoods(list);
    }

}
