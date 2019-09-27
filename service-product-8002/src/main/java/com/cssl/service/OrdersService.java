package com.cssl.service;

import com.cssl.entity.Orders;
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
public interface OrdersService extends IService<Orders> {

    //-----------------------前台-----------------------
    //查询当前用户的订单
    Page<Map<String,Object>> findOrdersByUserId(Map<String, Object> map);

    //查询当前订单下的明细
    public List<Map<String,Object>> findOrdersDetail(Integer oid);

    //查询用户订单的待付款待收货总记录数
    public List<Map<String,Object>> findTotal(Integer uid);

    //根据订单号查询地址的表相关信息
    public Map<String,Object> findAddressByOrder(Integer oid);

    //新增订单
    Map<String,Object> addOrder(Map<String,Object> map);

    // //用户支付订单详情
    List<Map<String,Object>> userPayInfo(Integer oid);

    //根据订单号查询商品
    Map<String,Object> findGoodsByOno(Map<String,Object> map);


    //-----------------------后台-----------------------
    //根据订单编号查询用户id，商品id,订单id
    public List<Map<String,Object>>byGoodId(String order_no);
    /**
     * 查询所有订单详情
     * @return
     */
    public Page<Map<String,Object>> orderList(Map<String,Object>map, int pageIndex, int pageSize);
    //根据订单号回显订单信息
    public List<Map<String,Object>> ByIdOrders(String orderNo);
    //修改订单状态
    public int updateStatus(Orders orders);
    //删除订单
    public int deleteOrder(int orderId);
    //计算本月退单数量,订单数量和金额,本月订单实际金额,本月未付款金额
    public Map<String,Object> orderQuantity();
    //查询最近一周的订单金额,未付金额,退款金额,实际金额
    public Map<String,Object> weekOrderQuantity();
    //查询最近一周对应日期的订单金额,未付金额,退款金额,实际金额
    public List<Map<String,Object>> weekOrder();

    //查看订单详情信息(用于后台)
    public Page<Map<String,Object>>orderDetail(String order_no,int pageIndex,int pageSize);
}
