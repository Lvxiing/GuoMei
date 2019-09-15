package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.Goods;
import com.cssl.entity.PageInfo;
import com.cssl.entity.Users;
import com.cssl.entity.VipGoods;
import com.cssl.service.CategoryService;
import com.cssl.service.GoodsService;
import com.cssl.service.Vip_goodsService;
import com.github.pagehelper.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
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


    //--------------------------前台模块-------------------------------
    //根据分类名称查询该分类下的所有品牌商品的热卖商品
    @RequestMapping("findGoodsByCategoryName")
    @ResponseBody
    public List<Goods> findGoodsByCategoryName(@RequestParam("categoryName")String categoryName){

        List list = new ArrayList();
        if (categoryName.indexOf(",") >= 0) {
            String[] nameList = categoryName.split(",");
            for (int i = 0; i < nameList.length; i++) {
                list.add(nameList[i]);
            }
        }else{
            list.add(categoryName);
        }

        return goodsService.findGoodsByCategoryName(list);
    }

    //根据分类名称查询该分类下的所有品牌商品的新品抢先
    @RequestMapping("findGoodsNewByCategoryName")
    @ResponseBody
    public List<Goods> findGoodsNewByCategoryName(@RequestParam("categoryName")String categoryName){
        List list = new ArrayList();
        if (categoryName.indexOf(",") >= 0) {
            String[] nameList = categoryName.split(",");
            for (int i = 0; i < nameList.length; i++) {
                list.add(nameList[i]);
            }
        }else{
            list.add(categoryName);
        }
        return goodsService.findGoodsNewByCategoryName(list);
    }

    //商品热销榜
    @RequestMapping("findSaleGoods")
    @ResponseBody
    public List<Goods> findSaleGoods(){
        return null;
    }


    //--------------------------后台模块-------------------------------
    @RequestMapping("findGoods")
    @ResponseBody
    public PageInfo<Map<String, Object>> findGoods(@RequestParam Map<String, Object> param) {
        Map<String, Object> map = new HashMap<>();
        map.put("cname", param.get("cname"));
        map.put("title", param.get("title"));
        Integer pageIndex = new Integer(param.get("pageIndex").toString());
        Integer pageSize = new Integer(param.get("pageSize").toString());
        Page<Map<String, Object>> goods = goodsService.findGoods(map, pageIndex, pageSize);

        PageInfo<Map<String, Object>> page = new PageInfo<>();
        List<Map<String, Object>> result = goods.getResult();
        //封装查询数据
        page.setList(result);
        //封装总记录数
        page.setTotalCount((int) goods.getTotal());
        return page;
    }


    @RequestMapping("addGoods")
    @ResponseBody
    public String addGoods(@RequestParam Map<String, Object> map) {
        Integer vip = new Integer(map.get("vip").toString());
        Integer ms = new Integer(map.get("ms").toString());
        Integer cid = new Integer(map.get("brand").toString());
        Integer stock = new Integer(map.get("stock").toString());
        Double price = new Double(map.get("price").toString());
        Integer state = new Integer(map.get("state").toString());
        Integer grade = null;
        if (map.get("grade")!=null && !"".equals(map.get("grade"))) {
            grade = new Integer(map.get("grade").toString());
        }
        int brandid = categoryService.selectBrandId(cid);
        int res = 0;
        Goods goods = new Goods();
        goods.setTitle(map.get("goodsName").toString());
        goods.setSubTitle(map.get("subTitle").toString());
        goods.setMainImg(map.get("imgmain").toString());
        goods.setDesImg(map.get("imginfo").toString());
        goods.setPrice(BigDecimal.valueOf(price));
        goods.setStock(stock);
        goods.setDes(map.get("desc").toString());
        goods.setState(state);
        goods.setBid(brandid);
        goods.setSeckill(ms);
        res = goodsService.addGoods(goods);
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
    public String modifyGoods(@RequestParam Map<String, Object> map){
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
        if (map.get("grade")!=null && !"".equals(map.get("grade"))) {
            grade = new Integer(map.get("grade").toString());
        }
        int bid = categoryService.selectBrandId(cid);
        goods.setTitle(map.get("goodsName").toString());
        goods.setSubTitle(map.get("subTitle").toString());
        goods.setMainImg(map.get("imgmain").toString());
        goods.setDesImg(map.get("imginfo").toString());
        goods.setId(id);
        goods.setPrice(BigDecimal.valueOf(price));
        goods.setStock(stock);
        goods.setDes(map.get("desc").toString());
        goods.setState(state);
        goods.setSeckill(ms);
        goods.setBid(bid);
        if (vip == 1) { //新增到会员商品中
            VipGoods vipGoods = new VipGoods();
            vipGoods.setGradeId(grade);
            vipGoods.setVipTime(new Date());
            vipGoods.setGoodsId(goods.getId());
            vipGoodsService.save(vipGoods);
        }
        if (vip == 0) { //从会员商品中删除
             boolean b = vipGoodsService.remove(new QueryWrapper<VipGoods>().eq("goods_id",goods.getId()));
            System.out.println("******************** = " + b);
        }
        boolean b = goodsService.updateById(goods);
        if(b){
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
    public Map findGoodsById(@RequestParam("id") Integer id){
        Map map = new HashMap();
        VipGoods vip = vipGoodsService.getOne(new QueryWrapper<VipGoods>().eq("goods_id",id));
        Goods goods = goodsService.getOne(new QueryWrapper<Goods>().eq("goods_id", id));
        map.put("goods",goods);
        map.put("vip",vip!=null ? 1:0);
        map.put("vipInfo",vip!=null ? vip:null);
        return map;
    }

}
