package com.cssl.service;

import com.cssl.entity.Coupon;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.pagehelper.Page;

import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface CouponService extends IService<Coupon> {
    //查询所有评论
    Page<Map<String,Object>> couponFindAll(Map<String,Object>map, int pageIndex, int pageSize);

}
