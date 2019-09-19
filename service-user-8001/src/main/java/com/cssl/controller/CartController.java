package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.cssl.entity.Cart;
import com.cssl.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @RequestMapping("/saveCart")
    public boolean saveCart(@RequestBody Cart cart) {
        return cartService.save(cart);
    }

    @RequestMapping("/cartAllGoodsByUserId/{userId}")
    public List<Map> cartAllGoodsByUserId(@PathVariable("userId") Integer userId) {
        return cartService.cartAllGoodsByUserId(userId);
    }

    @RequestMapping("/cartCount/{userId}")
    public Integer cartCount(@PathVariable("userId") Integer userId) {
        return cartService.cartCount(userId);
    }

    @RequestMapping("/findGoodsId/{goodsId}")
    public Cart findGoodsId(@PathVariable("goodsId") Integer goodsId) {
        return cartService.getOne(new QueryWrapper<Cart>().eq("goods_id", goodsId));
    }

    @RequestMapping("/updateCartNum")
    public int updateCartNum(@RequestParam Map map) {
        return cartService.updateCartNum(map);
    }

    @RequestMapping("/delCartGood")
    public boolean delCartGood(@RequestParam Map map) {
        return cartService.remove(new QueryWrapper<Cart>().eq("goods_id", map.get("goodsId")).eq("user_id", map.get("userId")));
    }

}
