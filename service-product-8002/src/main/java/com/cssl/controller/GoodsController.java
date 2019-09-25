package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.*;
import com.cssl.service.*;
import com.cssl.util.SolrUtils;
import com.github.pagehelper.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.math.BigDecimal;
import java.util.*;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Controller
@RequestMapping("/goods")
public class GoodsController {
    @Autowired
    private GoodsService goodsService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private Vip_goodsService vipGoodsService;

    @Autowired
    private EvaluateService evaluateService;

    @Autowired
    private BrandService brandService;


    //--------------------------前台模块-------------------------------
    //首页商品通用接口
    @RequestMapping("findGoodsByCategoryName")
    @ResponseBody
    public List<Goods> findGoodsByCategoryName(@RequestParam("categoryName") String categoryName, @RequestParam("bs") String bs) {
        Map<String, Object> map = new HashMap<>();
        map.put("list", collectionCategoryName(categoryName));
        map.put("bs", bs);
        return goodsService.findGoodsByCategoryName(map);
    }

    //封装参数
    public List collectionCategoryName(String categoryName) {
        List list = new ArrayList();
        if (categoryName.indexOf(",") >= 0) {
            String[] nameList = categoryName.split(",");
            for (int i = 0; i < nameList.length; i++) {
                list.add(nameList[i]);
            }
        } else {
            list.add(categoryName);
        }
        return list;
    }

    //根据当前第二级分类编号查询该分类下的所有第三级分类的热销榜
    @RequestMapping("findSaleByCategoryId")
    @ResponseBody
    public List<Map<String, Object>> findSaleByCategoryId(@RequestParam("cid") Integer cid) {
        return goodsService.findSaleByCategoryId(cid);
    }

    //根据当前一级分类编号查询该分类下的所有商品的热销榜
    @RequestMapping("findSaleAll")
    @ResponseBody
    public List<Map<String, Object>> findSaleAll(@RequestParam("cid") Integer cid) {
        return goodsService.findSaleAll(cid);
    }

    //首页的商品热销榜
    @RequestMapping("indexSaleGoods")
    @ResponseBody
    public List<Map<String, Object>> indexSaleGoods() {
        return goodsService.indexSaleGoods();
    }


    //查询商品详情信息
    @RequestMapping("GoodInfoShow")
    @ResponseBody
    public Map<String, Object> GoodInfoShow(@RequestParam("gid") Integer gid, HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> map = new HashMap<>();
        map.put("goodsDes", goodsService.getOne(new QueryWrapper<Goods>().eq("goods_id", gid)));
        // 1:好评 0:差评 2:中评
        int goodCount = evaluateService.count(new QueryWrapper<Evaluate>().eq("goods_id", gid).eq("evaluate_state", 1));
        int diffCount = evaluateService.count(new QueryWrapper<Evaluate>().eq("goods_id", gid).eq("evaluate_state", 0));
        int centCount = evaluateService.count(new QueryWrapper<Evaluate>().eq("goods_id", gid).eq("evaluate_state", 2));
        int count = evaluateService.count(new QueryWrapper<Evaluate>().eq("goods_id", gid));
        map.put("goodCount", goodCount);
        map.put("diffCount", diffCount);
        map.put("centCount", centCount);
        map.put("count", count);
        return map;
    }


    //最近浏览商品
    @ResponseBody
    @RequestMapping("browseGoods")
    public List<Goods> browseGoods(@RequestBody(required = false) String value) {
        List<Goods> goods = new ArrayList<>();
        if (value != null) {
            String[] id = value.split("#");
            for (int i = 0; i < id.length; i++) {
                goods.add(goodsService.getOne(new QueryWrapper<Goods>().eq("goods_id", Integer.valueOf(id[i]))));
            }
        }
        return goods;
    }

    //商品详情的热销榜
    @RequestMapping("goodsInfoSale")
    @ResponseBody
    public List<Goods> goodsInfoSale(@RequestParam("cid") Integer cid) {
        return goodsService.goodsInfoSale(cid);
    }

    //--------------------------后台模块-------------------------------
    @RequestMapping("findGoods")
    @ResponseBody
    public PageInfo<Map<String, Object>> findGoods(@RequestParam Map<String, Object> param, @RequestParam("page") int page, @RequestParam("limit") int limit) throws Exception {
        Page<Map<String, Object>> goods = goodsService.findGoods(param, page, limit);
        PageInfo<Map<String, Object>> pages = new PageInfo<>();
        List<Map<String, Object>> result = goods.getResult();
        //封装查询数据
        pages.setList(result);
        //封装总记录数
        pages.setTotalCount((int) goods.getTotal());
        return pages;
    }


    @RequestMapping("addGoods")
    @ResponseBody
    public String addGoods(@RequestParam Map<String, Object> map) throws Exception {
        Integer vip = new Integer(map.get("vip").toString());
        Integer ms = new Integer(map.get("ms").toString());
        Integer cid = new Integer(map.get("brand").toString());
        Integer stock = new Integer(map.get("stock").toString());
        Double price = new Double(map.get("price").toString());
        Integer state = new Integer(map.get("state").toString());
        Integer grade = null;
        if (map.get("grade") != null && !"".equals(map.get("grade"))) {
            grade = new Integer(map.get("grade").toString());
        }
        int brandid = categoryService.selectBrandId(cid);
        int res = 0;
        Goods goods = new Goods();
        goods.setTitle(map.get("goodsName").toString());
        goods.setSubTitle(map.get("subTitle").toString());
        goods.setMainImg(map.get("imgmain").toString());
        goods.setDesImg(map.get("imginfo").toString());
        BigDecimal decimal = new BigDecimal(price);
        goods.setPrice(decimal.setScale(2, BigDecimal.ROUND_HALF_UP));
        goods.setStock(stock);
        goods.setDes(map.get("desc").toString());
        goods.setState(state);
        goods.setBid(brandid);
        goods.setSeckill(ms);
        res = goodsService.addGoods(goods);

        Brand brand_id = brandService.getOne(new QueryWrapper<Brand>().eq("brand_id", brandid));
        //添加到solr中
        SolrPo solrPo = new SolrPo();
        solrPo.setId(goods.getId().toString());
        solrPo.setSub(goods.getSubTitle());
        solrPo.setTitle(goods.getTitle());
        solrPo.setImg(goods.getMainImg());
        solrPo.setPrice(goods.getPrice().doubleValue());
        solrPo.setTimes(goods.getTime());
        solrPo.setCid(brand_id.getCid());
        SolrUtils solrUtils = new SolrUtils();
        solrUtils.addDoc(solrPo);
        if (vip == 1) { //新增到会员商品中
            VipGoods vipGoods = new VipGoods();
            vipGoods.setGradeId(grade);
            vipGoods.setVipTime(new Date());
            vipGoods.setGoodsId(goods.getId());
            vipGoodsService.save(vipGoods);
        }
        if (res > 0) {
            String json = "{\"code\":\"success\"}";
            return json;
        }
        return "{\"msg\":\"新增失败\"}";
    }

    //修改商品
    @RequestMapping("modifyGoods")
    @ResponseBody
    public String modifyGoods(@RequestParam Map<String, Object> map) throws Exception {
        Integer vip = new Integer(map.get("vip").toString());
        System.out.println("vip = " + vip);
        Integer id = new Integer(map.get("gid").toString());
        Double price = new Double(map.get("price").toString());
        Integer stock = new Integer(map.get("stock").toString());
        Integer state = new Integer(map.get("state").toString());
        Integer ms = new Integer(map.get("ms").toString());
        Integer cid = new Integer(map.get("brand").toString());
        Goods goods = new Goods();
        Integer grade = null;
        if (map.get("grade") != null && !"".equals(map.get("grade"))) {
            grade = new Integer(map.get("grade").toString());
        }
        int bid = categoryService.selectBrandId(cid);
        goods.setTitle(map.get("goodsName").toString());
        goods.setSubTitle(map.get("subTitle").toString());
        goods.setMainImg(map.get("imgmain").toString());
        goods.setDesImg(map.get("imginfo").toString());
        goods.setId(id);
        BigDecimal decimal = new BigDecimal(price);
        goods.setPrice(decimal.setScale(2, BigDecimal.ROUND_HALF_UP));
        goods.setStock(stock);
        goods.setDes(map.get("desc").toString());
        goods.setState(state);
        goods.setSeckill(ms);
        goods.setBid(bid);

        Brand brand_id = brandService.getOne(new QueryWrapper<Brand>().eq("brand_id", bid));
        //修改solr中的数据
        SolrPo solrPo = new SolrPo();
        solrPo.setId(goods.getId().toString());
        solrPo.setSub(goods.getSubTitle());
        solrPo.setTitle(goods.getTitle());
        solrPo.setImg(goods.getMainImg());
        solrPo.setPrice(goods.getPrice().doubleValue());
        solrPo.setTimes(goods.getTime());
        solrPo.setCid(brand_id.getCid());
        SolrUtils solrUtils = new SolrUtils();
        solrUtils.addDoc(solrPo);

        if (vip == 1) { //新增到会员商品中
            VipGoods vipGoods = new VipGoods();
            vipGoods.setGradeId(grade);
            vipGoods.setVipTime(new Date());
            vipGoods.setGoodsId(goods.getId());
            vipGoodsService.save(vipGoods);
        }
        if (vip == 0) { //从会员商品中删除
            boolean b = vipGoodsService.remove(new QueryWrapper<VipGoods>().eq("goods_id", goods.getId()));
            System.out.println("******************** = " + b);
        }
        boolean b = goodsService.updateById(goods);
        if (b) {
            String json = "{\"code\":\"success\"}";
            return json;
        }
        return "{\"msg\":\"修改失败\"}";
    }

    @RequestMapping("upStateGoods")
    @ResponseBody
    public String upStateGoods(@RequestParam Map<String, Object> map) {
        int result = goodsService.upStateGoods(map);
        if (result > 0) {
            String json = "{\"code\":\"success\"}";
            return json;
        }

        return "{\"msg\":\"修改失败\"}";
    }

    @RequestMapping("findGoodsById")
    @ResponseBody
    public Map findGoodsById(@RequestParam("id") Integer id) {
        Map map = new HashMap();
        VipGoods vip = vipGoodsService.getOne(new QueryWrapper<VipGoods>().eq("goods_id", id));
        Goods goods = goodsService.getOne(new QueryWrapper<Goods>().eq("goods_id", id));
        map.put("goods", goods);
        map.put("vip", vip != null ? 1 : 0);
        map.put("vipInfo", vip != null ? vip : null);
        return map;
    }

    @ResponseBody
    @RequestMapping("findAllSolrData")
    public List<SolrPo> findAllSolrData() {
        return goodsService.findAllSolrData();
    }

}
