package com.cssl.service.impl;

import com.cssl.entity.Goods;
import com.cssl.mapper.GoodsMapper;
import com.cssl.service.GoodsService;
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
    public List<Goods> findGoodsByCategoryName(List list) {
        return goodsMapper.findGoodsByCategoryName(list);
    }

    @Override
    public List<Goods> findGoodsNewByCategoryName(List list) {
        return goodsMapper.findGoodsNewByCategoryName(list);
    }

    @Override
    public List<Goods> ListfindGoodsLowPrice(List list) {
        return goodsMapper.ListfindGoodsLowPrice(list);
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

}
