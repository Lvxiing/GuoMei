package com.cssl.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Coupon;
import com.cssl.entity.CouponReceive;
import com.cssl.entity.PageInfo;
import com.cssl.entity.Users;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/coupon")
public class CouponController {

    @Autowired
    private ProductFeignInterface productFeignInterface;

    //-------------------------前台--------------------
    @ResponseBody
    @RequestMapping("couponFindAllQian")
    public Map<String,Object> couponFindAllQian(@RequestParam Map<String, Object> map) {
        return productFeignInterface.couponFindAllQian(map);
    }

    @RequestMapping("addCouponReceive")
    @ResponseBody
    public String addCouponReceive(HttpSession session,@RequestParam Map<String,Object>map){
        Users user = (Users)session.getAttribute("user");
        map.put("uid",user.getId());
        return productFeignInterface.addCouponReceive(map);
    }
    //查询当前用户所有优惠券
    @RequestMapping("userCouponList")
    @ResponseBody
    public PageInfo<Map<String, Object>>userCouponList(HttpSession session,@RequestParam Map<String,Object> map){
        Users user = (Users)session.getAttribute("user");
        map.put("uid",31);
        return productFeignInterface.userCouponList(map);
    }



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
        return map;
    }
    //获取当前进行修改的优惠券信息
    @RequestMapping("getCouponUpdateInfo")
    @ResponseBody
    public Coupon getCouponUpdateInfo(@RequestParam Integer id){
      return productFeignInterface.getCouponUpdateInfo(id);
    }

    @RequestMapping("modifyCoupon")
    @ResponseBody
    public String modifyCoupon(@RequestParam Map<String,Object>map){
        return productFeignInterface.modifyCoupon(map);
    }

}
