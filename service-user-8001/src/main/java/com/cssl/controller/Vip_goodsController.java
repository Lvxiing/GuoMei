package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.VipGoods;
import com.cssl.service.Vip_goodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@RestController
@RequestMapping("/vip_goods")
public class Vip_goodsController {

    @Autowired
    private Vip_goodsService vip_goodsService;


    @RequestMapping("/ifVipGoods/{goodsId}")
    public VipGoods   ifVipGoods(@PathVariable("goodsId") Integer goodsId){
return vip_goodsService.getOne(new QueryWrapper<VipGoods>().eq("goods_id",goodsId));
    }


}
