package com.cssl.mapper;

import com.cssl.entity.Coupon;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface CouponMapper extends BaseMapper<Coupon> {
    //查询全部优惠券(后台)
    List<Map<String,Object>> couponFindAll(Map<String,Object> map);

    //查询全部优惠券(前台)
    List<Map<String,Object>> couponFindAllQian(Map<String,Object> map);

    //查询当前用户的优惠券
    List<Map<String,Object>> userCouponList(Map<String,Object> map);

    //查询当前用户的优惠券总数
    int userCouponCount(Integer type,Integer uid);
}
