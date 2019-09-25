package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/coupon")
public class CouponController {

    @Autowired
    private ProductFeignInterface productFeignInterface;


    // ------------------------后台--------------------
    @RequestMapping("addCoupon")
    @ResponseBody
    public String addCoupon(@RequestParam Map<String,Object> map){
       return productFeignInterface.addCoupon(map);
    }


    //查询所有优惠券
    @RequestMapping("/couponFindAll/{name}/{start}/{end}")
    @ResponseBody
    public Map<String,Object> couponFindAll(@PathVariable("name") String name, @PathVariable("start") String start, @PathVariable("end") String end, @RequestParam("page")int page, @RequestParam("limit")int limit){
        Map<String,Object> param = new HashMap<>();
        param.put("name",name);
        param.put("start",start);
        param.put("end",end);
        Map<String,Object> map = new HashMap<String,Object>();
        PageInfo<Map<String, Object>> mapPageInfo = productFeignInterface.couponFindAll(param,page,limit);
        map.put("code",0);
        map.put("msg", "");
        map.put("data",mapPageInfo.getList());
        map.put("count",mapPageInfo.getTotalCount());
        System.out.println("mapPageInfo.getList() ***= " + mapPageInfo.getList());
        return map;
    }
}
