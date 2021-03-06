package com.cssl.service.impl;

import com.cssl.entity.Coupon;
import com.cssl.mapper.CouponMapper;
import com.cssl.service.CouponService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
public class CouponServiceImpl extends ServiceImpl<CouponMapper, Coupon> implements CouponService {

    @Autowired
    private CouponMapper couponMapper;

    @Override
    public Page<Map<String, Object>> couponFindAll(Map<String, Object> map, int pageIndex, int pageSize) {
        Page<Map<String, Object>> page = PageHelper.startPage(pageIndex, pageSize,"start_time DESC");
        couponMapper.couponFindAll(map);
        return page;
    }

    @Override
    public List<Map<String, Object>> couponFindAllQian(Map<String, Object> map) {
        return couponMapper.couponFindAllQian(map);
    }

    @Override
    public Page<Map<String, Object>> userCouponList(Map<String, Object> map) {
        Page<Map<String, Object>>  page = PageHelper.startPage(Integer.valueOf(map.get("pageIndex").toString()), Integer.valueOf(map.get("pageSize").toString()));
        couponMapper.userCouponList(map);
        return page;
    }

    @Override
    public int userCouponCount(Integer type, Integer uid) {
        return couponMapper.userCouponCount(type,uid);
    }

    @Override
    public List<Map<String, Object>> findMyCoupon(Map<String, Object> map) {
        return couponMapper.findMyCoupon(map);
    }

    @Override
    public Map<String, Object> findCouponQuanInfo(Integer cid) {
        return couponMapper.findCouponQuanInfo(cid);
    }
}
