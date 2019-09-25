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
    //查询全部评论
    List<Map<String,Object>> couponFindAll(Map<String,Object> map);

}
