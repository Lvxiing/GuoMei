package com.cssl.service;

import com.cssl.entity.Coupon;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.pagehelper.Page;

import java.util.List;
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

    //查询全部优惠券(前台)
    List<Map<String,Object>> couponFindAllQian(Map<String,Object> map);

    //查询当前用户所有优惠券
    Page<Map<String,Object>> userCouponList(Map<String,Object>map);

    //查询当前用户的优惠券总数
    int userCouponCount(Integer type,Integer uid);

    //查询当前用户可使用的优惠券
    List<Map<String,Object>> findMyCoupon(Map<String,Object>map);

    Map<String,Object> findCouponQuanInfo(Integer cid);

}
