package com.cssl.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.api.ProductFeignInterface;
import com.cssl.api.UserFeignInterface;
import com.cssl.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpSession;
import javax.swing.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private UserFeignInterface userFeignInterface;

    //将商品加入购物车
    @RequestMapping("/saveCart")
    @ResponseBody
    public Map saveCart(Cart cart, HttpSession session) {
        Users users = (Users) session.getAttribute("user");
        cart.setUserId(users.getId());
        Cart c = userFeignInterface.findGoodsId(cart.getGoodsId());
        Map hm = new HashMap();
        if (c == null) {   //该商品不在我的购物车中,就加入到我的购物车
            boolean b = userFeignInterface.saveCart(cart);
            hm.put("msg", "新增到购物车");
        } else {   //该商品已在我的购物车中,就修改数量
            Map map = new HashMap();
            map.put("goodsId", c.getGoodsId());
            map.put("cartNum", c.getNum() + cart.getNum());
            int i = userFeignInterface.updateCartNum(map);
            hm.put("msg", "修改数量");
        }
        return hm;
    }

    //我的购物车里显示
    @RequestMapping("/cartAllGoodsByUserId")
    @ResponseBody
    List<Map> cartAllGoodsByUserId(HttpSession session) {
        Users users = (Users) session.getAttribute("user");
        return  userFeignInterface.cartAllGoodsByUserId(users.getId());
    }

    //我的购物车中商品的件数
    @RequestMapping("/cartCount")
    @ResponseBody
    public Integer cartCount(HttpSession session) {
        Users users = (Users) session.getAttribute("user");
        return userFeignInterface.cartCount(users.getId());
    }

    //把我的购物车中的商品删除
    @RequestMapping("/delCartGood/{goodsId}")
    @ResponseBody
    public boolean delCartGood(@PathVariable("goodsId") Integer goodsId, HttpSession session) {
        Map map = new HashMap();
        map.put("goodsId", goodsId);
        Users users = (Users) session.getAttribute("user");
        map.put("userId", users.getId());
        return userFeignInterface.delCartGood(map);
    }

    //将商品移入收藏夹
    @RequestMapping("/saveCollection/{goodsId}")
    @ResponseBody
    public boolean saveCollection(@PathVariable("goodsId") Integer goodsId, HttpSession session) {
        Collections collections = new Collections();
        collections.setGoodsId(goodsId);
        Users users = (Users) session.getAttribute("user");
        collections.setUid(users.getId());
        return userFeignInterface.saveCollection(collections);
    }

    //判断该用户是否已收藏该商品
    @RequestMapping("/findIfCollected/{goodsId}")
    @ResponseBody
    public Collections  findIfCollected(@PathVariable("goodsId") Integer goodsId, HttpSession session){
        Map map=new HashMap();
        map.put("goodsId",goodsId);
        Users users = (Users) session.getAttribute("user");
        map.put("userId",users.getId());
        return userFeignInterface.findIfCollected(map);
    }

    //判断该商品是否是会员专享价格
    @RequestMapping("/ifVipGoods/{goodsId}")
    @ResponseBody
    public VipGoods ifVipGoods(@PathVariable("goodsId") Integer goodsId){
        return userFeignInterface.ifVipGoods(goodsId);
    }

    //查询收藏的商品,并分页显示
    @RequestMapping("/collectionFenYe/{pageIndex}")
    @ResponseBody
    public Map<String,Object> collectionFenYe(HttpSession session, @PathVariable("pageIndex") int pageIndex){
        Users users = (Users) session.getAttribute("user");
        final Integer pageSize=3;
        PageInfo<Map> mapPageInfo = userFeignInterface.collectionFenYe(users.getId(), pageIndex, pageSize);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("count", mapPageInfo.getTotalCount());  //总记录数
        map.put("data", mapPageInfo.getList());
        map.put("pageNo",mapPageInfo.getPageNo());  //当前页码
        map.put("pageCount",mapPageInfo.getPageCount());  //总页数
       return map;
    }

//取消收藏
    @RequestMapping("/delCollection/{collectionId}")
    @ResponseBody
  public   boolean  delCollection(@PathVariable("collectionId") Integer collectionId){
        return userFeignInterface.delCollection(collectionId);
    }





}
