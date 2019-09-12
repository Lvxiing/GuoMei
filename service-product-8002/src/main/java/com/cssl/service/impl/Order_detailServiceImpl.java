package com.cssl.service.impl;

import com.cssl.entity.OrderDetail;
import com.cssl.mapper.Order_detailMapper;
import com.cssl.service.Order_detailService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
public class Order_detailServiceImpl extends ServiceImpl<Order_detailMapper, OrderDetail> implements Order_detailService {
   @Autowired
   private Order_detailMapper order_detailMapper;
    @Override
    public int deletOrderDetail(int orderId) {
        return order_detailMapper.deletOrderDetail(orderId);
    }
}
