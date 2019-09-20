package com.cssl.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.api.ProductFeignInterface;
import com.cssl.api.UserFeignInterface;
import com.cssl.entity.Cart;
import com.cssl.entity.Collections;
import com.cssl.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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
        return userFeignInterface.cartAllGoodsByUserId(users.getId());
    }

    //确定购买,要生成订单的商品和数量
    @RequestMapping("/toOrder")
    @ResponseBody
    public List<Cart> toOrder(@RequestParam("goodsId[]") Integer[] goodsId, @RequestParam("num[]") Integer[] num) {
        List<Cart> toBuyList = new ArrayList<>();
        for (int i = 0; i < goodsId.length; i++) {
            Cart cart = new Cart();
            cart.setGoodsId(goodsId[i]);
            cart.setNum(num[i]);
            toBuyList.add(cart);
        }
        //还需把这些确定购买,要生成订单的商品从我的购物车中删除


        return toBuyList;
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

    //将我的购物车中的商品移入收藏夹
    @RequestMapping("/saveCollection/{goodsId}")
    @ResponseBody
    public boolean saveCollection(@PathVariable("goodsId") Integer goodsId, HttpSession session) {
        Collections collections = new Collections();
        collections.setGoodsId(goodsId);
        Users users = (Users) session.getAttribute("user");
        collections.setUid(users.getId());
        //移入收藏夹后需把我的购物车中该商品删除
        boolean b = delCartGood(goodsId, session);
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






}
