package com.cssl.controller;


import com.cssl.entity.Orders;
import com.cssl.entity.PageInfo;
import com.cssl.mapper.Order_detailMapper;
import com.cssl.service.Order_detailService;
import com.cssl.service.OrdersService;
import com.github.pagehelper.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Controller
@RequestMapping("/orders")
public class OrdersController {
    @Autowired
    private OrdersService ordersService;
    @Autowired
    private Order_detailService orderDetailService;
     //-----------------------------后台模块----------------------------
     //查询所有订单详情
     @RequestMapping("/orderList/{pageIndex}/{pageSize}/{orderNo}/{name}")
     @ResponseBody
     public PageInfo<Map<String, Object>> orderList(@PathVariable("pageIndex")Integer pageIndex, @PathVariable("pageSize")Integer pageSize, @PathVariable("orderNo")String orderNo, @PathVariable("name")String name){
         Map<String,Object> map=new HashMap<>();
         map.put("orderNo",orderNo);
         map.put("name",name);
         Page<Map<String, Object>> maps = ordersService.orderList(map, pageIndex, pageSize);
         PageInfo<Map<String, Object>>page=new PageInfo<>();
         List<Map<String, Object>> result = maps.getResult();
         //封装查询数据
         page.setList(result);
         //封装总记录数
         page.setTotalCount((int)maps.getTotal());
         return page;
     }

    //修改回显
    @RequestMapping("/ByIdOrders/{orderNo}")
    @ResponseBody
    public List<Map<String,Object>> ByIdOrders(@PathVariable("orderNo")String orderNo){
        return ordersService.ByIdOrders(orderNo);
    }

    //修改订单状态
    @RequestMapping("/updateStatus")
    @ResponseBody
    public int updateStatus(@RequestParam("orderNo") String orderNo, @RequestParam("status") int status){
        Orders orders=new Orders();
        orders.setStatus(status);
        orders.setOrderNo(orderNo);
        return  ordersService.updateStatus(orders);

    }

    //删除订单
    @RequestMapping("/deleteOrders")
    @ResponseBody
    public int deleteOrders(@RequestParam("orderId")Integer orderId){
        //先删除订单详情表
        int i = orderDetailService.deletOrderDetail(orderId);
        int num=0;
        if(i>0) {
            num = ordersService.deleteOrder(orderId);
        }
        return num;
    }
    //计算本月退单数量,订单数量和金额,本月订单实际金额,本月未付款金额
    @RequestMapping("/inquiryAmount")
    @ResponseBody
    public Map<String,Object> inquiryAmount(){
        return  ordersService.orderQuantity();
    }

    //查询最近一周的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/weekInquiryAmount")
    @ResponseBody
    public Map<String,Object> weekInquiryAmount(){
        return  ordersService.weekOrderQuantity();
    }
    //查询最近一周对应日期的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/weekOrder")
    @ResponseBody
    public List<Map<String,Object>> weekOrder(){
        return  ordersService.weekOrder();
    }

}
