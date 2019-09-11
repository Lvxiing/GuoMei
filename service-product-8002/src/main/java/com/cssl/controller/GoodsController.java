package com.cssl.controller;


import com.cssl.entity.Goods;
import com.cssl.entity.PageInfo;
import com.cssl.entity.VipGoods;
import com.cssl.service.CategoryService;
import com.cssl.service.GoodsService;
import com.cssl.service.Vip_goodsService;
import com.github.pagehelper.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  前端控制器
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

        PageInfo<Map<String, Object>>page=new PageInfo<>();
        List<Map<String, Object>> result = goods.getResult();
        //封装查询数据
        page.setList(result);
        //封装总记录数
        page.setTotalCount((int)goods.getTotal());
        return page;
    }



    @RequestMapping("addGoods")
    @ResponseBody
    public String addGoods(@RequestParam Map<String,Object> map){
        Integer vip = new Integer(map.get("vip").toString());
        Integer ms = new Integer(map.get("ms").toString());
        Integer cid = new Integer(map.get("brand").toString());
        Integer stock = new Integer(map.get("stock").toString());
        Double price = new Double(map.get("price").toString());
        Integer state = new Integer(map.get("state").toString());
        Integer grade = new Integer(map.get("grade").toString());
        int brandid = categoryService.selectBrandId(cid);
        int res = 0;
        Goods goods = new Goods();
        goods.setTitle(map.get("goodsName").toString());
        goods.setSubTitle(map.get("subTitle").toString());
        goods.setMainImg(map.get("imgmain").toString());
        goods.setDesImg(map.get("imginfo").toString());
        goods.setPrice(BigDecimal.valueOf(price));
        goods.setStock(stock);
        goods.setDescribe(map.get("desc").toString());
        goods.setState(state);
        goods.setBid(brandid);
        goods.setSeckill(ms);
        res = goodsService.addGoods(goods);
        if(ms==1){ //新增到秒杀商品中

        }
        if(vip==1){ //新增到会员商品中
            VipGoods vipGoods =new VipGoods();
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

    @RequestMapping("upStateGoods")
    @ResponseBody
    String upStateGoods(@RequestParam Map<String,Object> map){
        int result = goodsService.upStateGoods(map);
        if (result > 0) {
            String json = "{\"code\":\"success\"}";
            return json;
        }

        return "{\"msg\":\"修改失败\"}";
    }

}
