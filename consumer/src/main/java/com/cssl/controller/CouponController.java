package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping("/coupon")
public class CouponController {

    @Autowired
    private ProductFeignInterface productFeignInterface;

    @RequestMapping("addCoupon")
    @ResponseBody
    public String addCoupon(@RequestParam Map<String,Object> map){
       return productFeignInterface.addCoupon(map);
    }
}
