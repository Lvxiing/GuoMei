package com.cssl.service;

import com.cssl.entity.OrderDetail;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface Order_detailService extends IService<OrderDetail> {
    //删除订单详情(删除订单时先删除订单详情)
    public int deletOrderDetail(int orderId);
}
