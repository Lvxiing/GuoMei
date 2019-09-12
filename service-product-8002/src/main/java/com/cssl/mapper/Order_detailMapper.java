package com.cssl.mapper;

import com.cssl.entity.OrderDetail;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface Order_detailMapper extends BaseMapper<OrderDetail> {
    //删除订单详情(删除订单时先删除订单详情)
    public int deletOrderDetail(int orderId);

}
