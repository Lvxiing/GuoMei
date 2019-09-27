package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.CouponReceive;
import com.cssl.service.Coupon_receiveService;
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
@RequestMapping("/coupon_receive")
public class Coupon_receiveController {

    @Autowired
    private Coupon_receiveService coupon_receiveService;


    @RequestMapping("/userCouponCount/{userId}")
    public int   userCouponCount(@PathVariable("userId") Integer userId){
     return   coupon_receiveService.count(new QueryWrapper<CouponReceive>().eq("user_id",userId).eq("status",0));
    }

}
