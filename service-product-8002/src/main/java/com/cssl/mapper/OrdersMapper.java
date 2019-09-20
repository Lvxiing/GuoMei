package com.cssl.mapper;

import com.cssl.entity.Orders;
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
public interface OrdersMapper extends BaseMapper<Orders> {

    //-----------------------前台---------------------------
    //查询当前用户的订单
    public List<Map<String,Object>> findOrdersByUserId(Map<String,Object> map);
    //查询当前订单下的明细
    public List<Map<String,Object>> findOrdersDetail(Integer oid);
    //查询用户订单的待付款待收货总记录数
    public List<Map<String,Object>> findTotal(Integer uid);
    //根据订单号查询地址表的相关信息
   public Map<String,Object> findAddressByOrder(Integer oid);
    //-----------------------后台---------------------------
    //查询所有订单详情
    public List<Map<String,Object>> orderList(Map<String,Object>map);
    //根据订单号回显订单信息
    public List<Map<String,Object>> ByIdOrders(String orderNo);
    //修改订单状态
    public int updateStatus(Orders orders);
    //删除订单
    public int deleteOrder(int id);
    //计算本月订单数量和金额
    public Map<String,Object> orderQuantity();
    //计算本月退单数量
    public Map<String,Object> returnQuantity ();
    //计算本月订单实际金额
    public double orderAmount();
    //计算最近一周的订单金额
    public List<Map<String,Object>> weekOrderQuantity();
    //查询最近一周的退款金额
    public  List<Map<String,Object>> weekReturnQuantity ();
    //查询最近一周的实际金额
    public  List<Map<String,Object>> weekOrderAmount();
    //查询最近一周的未付金额
    public  List<Map<String,Object>> weekUnpaidAmount ();
    //查看订单详情信息
    public List<Map<String,Object>>orderDetail(String order_no);
}
