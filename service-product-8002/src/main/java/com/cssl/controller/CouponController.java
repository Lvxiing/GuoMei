package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.Category;
import com.cssl.entity.Coupon;
import com.cssl.entity.PageInfo;
import com.cssl.service.CategoryService;
import com.cssl.service.CouponService;
import com.github.pagehelper.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
@Controller
@RequestMapping("/coupon")
public class CouponController {

    @Autowired
    private CouponService couponService;

    @Autowired
    private CategoryService categoryService;

    //--------------------------后台--------------------------
    @RequestMapping("addCoupon")
    @ResponseBody
    public String addCoupon(@RequestParam Map<String, Object> map) throws Exception {
        //时间转换
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date end = simpleDateFormat.parse(map.get("endTime").toString());
        Date start = simpleDateFormat.parse(map.get("startTime").toString());
        //封装数据
        Coupon coupon = new Coupon();
        coupon.setCouponName(map.get("cname").toString());
        Category one = categoryService.getOne(new QueryWrapper<Category>().eq("category_name", map.get("catename").toString()));
        coupon.setCategoryId(one.getCid());
        coupon.setStartTime(start);
        coupon.setEndTime(end);
        coupon.setCouponMoney(BigDecimal.valueOf(Double.valueOf(map.get("price").toString())));
        coupon.setType(Integer.valueOf(map.get("type").toString()));
        if (map.get("fullPrice").toString() != null) {

        }
        if (map.get("fullPrice") != null && !"".equals(map.get("fullPrice"))) {
            double price = Double.valueOf(map.get("fullPrice").toString());
            coupon.setFullMoney(BigDecimal.valueOf(price));
        }
        //判断开始时间和结束时间是否相同,
        //返回1:begin大于end;
        //返回0:begin等于end;
        //返回-1:begin小于end
        Integer state = start.compareTo(new Date()) == 1 ? 0 : 1;
        coupon.setStatus(state);
        coupon.setRemarks(map.get("cdes").toString());
        coupon.setCouponCount(Integer.valueOf(map.get("number").toString()));
        coupon.setCouponLimit(Integer.valueOf(map.get("limit").toString()));
        boolean save = couponService.save(coupon);
        if (save) {
            String json = "{\"code\":\"success\"}";
            return json;
        }
        return "{\"msg\":\"新增失败\"}";
    }


    @RequestMapping("couponFindAll")
    @ResponseBody
    public PageInfo<Map<String, Object>> couponFindAll(@RequestParam Map<String, Object> param, @RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageInfo<Map<String, Object>> pages = new PageInfo<>();
        Page<Map<String, Object>> maps = couponService.couponFindAll(param, page, limit);
        List<Map<String, Object>> result = maps.getResult();
        //封装查询数据
        pages.setList(result);
        //封装总记录数
        pages.setTotalCount((int) maps.getTotal());
        return pages;
    }

    //获取当前进行修改的优惠券信息
    @RequestMapping("getCouponUpdateInfo")
    @ResponseBody
    public Coupon getCouponUpdateInfo(@RequestParam Integer id) {
        return couponService.getOne(new QueryWrapper<Coupon>().eq("coupon_id", id));
    }

    @RequestMapping("modifyCoupon")
    @ResponseBody
    public String modifyCoupon(@RequestParam Map<String, Object> map) throws Exception {
        Coupon coupon = new Coupon();
        coupon.setId(Integer.valueOf(map.get("cid").toString()));
        coupon.setCouponName(map.get("cname").toString());
        coupon.setRemarks(map.get("cdes").toString());
        Category one = categoryService.getOne(new QueryWrapper<Category>().eq("category_name", map.get("catename").toString()));
        coupon.setCategoryId(one.getCid());
        coupon.setType(Integer.valueOf(map.get("type").toString()));
        if (map.get("fullPrice") != null && !"".equals(map.get("fullPrice"))) {
            double price = Double.valueOf(map.get("fullPrice").toString());
            coupon.setFullMoney(BigDecimal.valueOf(price));
        }
        Double price = new Double(map.get("price").toString());
        BigDecimal decimal = new BigDecimal(price);
        coupon.setCouponMoney(decimal.setScale(2, BigDecimal.ROUND_HALF_UP));
        //时间转换
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date end = simpleDateFormat.parse(map.get("endTime").toString());
        Date start = simpleDateFormat.parse(map.get("startTime").toString());
        coupon.setStartTime(start);
        coupon.setEndTime(end);
        coupon.setCouponCount(Integer.valueOf(map.get("number").toString()));
        coupon.setCouponLimit(Integer.valueOf(map.get("limit").toString()));
        boolean b = couponService.updateById(coupon);
        if (b) {
            String json = "{\"code\":\"success\"}";
            return json;
        }
        return "{\"msg\":\"修改失败\"}";
    }

    @ResponseBody
    @RequestMapping("couponFindAllQian")
    public List<Map<String, Object>> couponFindAllQian(Map<String, Object> map) {
        return couponService.couponFindAllQian(map);
    }
}
