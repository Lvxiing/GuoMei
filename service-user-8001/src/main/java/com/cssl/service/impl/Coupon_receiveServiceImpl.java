package com.cssl.service.impl;

import com.cssl.entity.CouponReceive;
import com.cssl.mapper.Coupon_logsMapper;
import com.cssl.mapper.Coupon_receiveMapper;
import com.cssl.service.Coupon_receiveService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
@Transactional
public class Coupon_receiveServiceImpl extends ServiceImpl<Coupon_receiveMapper, CouponReceive> implements Coupon_receiveService {

    @Autowired
    private Coupon_receiveMapper coupon_receiveMapper;

}
