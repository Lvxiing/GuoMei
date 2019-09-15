package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/Orders")
@Controller
public class OrdersController {
    @Autowired
    private ProductFeignInterface productFeignInterface;

    //查询所有和模糊查询和分页
    @RequestMapping("/orderList/{pageIndex}/{pageSize}/{orderNo}/{name}")
    @ResponseBody
    public Map<String,Object> findOrders(@PathVariable("pageIndex")Integer pageIndex, @PathVariable("pageSize")Integer pageSize, @PathVariable("orderNo")String orderNo, @PathVariable("name")String name){
        Map<String,Object>map=new HashMap<>();
        PageInfo<Map<String, Object>> mapPageInfo = productFeignInterface.orderList(pageIndex, pageSize, orderNo, name);
        map.put("code",0);
        map.put("data",mapPageInfo.getList());
        map.put("totalCount",mapPageInfo.getTotalCount());
        return map;
    }
    //根据订单号查询(回显)
    @RequestMapping("/ByIdOrders/{orderNo}")
    @ResponseBody
    public List<Map<String,Object>> ByIdOrders(@PathVariable("orderNo")String orderNo){
        return productFeignInterface.ByIdOrders(orderNo);
    }
    //根据订单编号修改
    @RequestMapping("/updateStatus")
    @ResponseBody
    public int updateStatus(@RequestParam("orderNo") String orderNo, @RequestParam("status") int status){
        if(orderNo!=null&&status!=0){
            return productFeignInterface.updateStatus(orderNo,status);
        }else{
            return 0;
        }
    }
    //删除订单
    @RequestMapping("/deleteOrders")
    @ResponseBody
    public int deleteOrders(@RequestParam("orderId")Integer orderId){
        return productFeignInterface.deleteOrders(orderId);
    }
    //计算本月退单数量,订单数量和金额,本月订单实际金额,本月未付款金额
    @RequestMapping("/inquiryAmount")
    @ResponseBody
    public Map<String,Object> inquiryAmount(){
        return productFeignInterface.inquiryAmount();
    }
    //查询最近一周的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/weekInquiryAmount")
    @ResponseBody
    public Object weekInquiryAmount(){
        return productFeignInterface.weekInquiryAmount();
    }
    //查询最近一周对应日期的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/weekOrder")
    @ResponseBody
    public Map<String, Object> weekOrder(){
        Map<String,Object> map=new HashMap<>();
        List<Map<String, Object>> maps = productFeignInterface.weekOrder();
        map.put("code",0);
        map.put("data",maps);
        return map;
    }
    //查看订单详情购买商品信息
    @RequestMapping("/orderDetail")
    @ResponseBody
    public Map<String,Object> orderDetail(@RequestParam("order_no")String order_no,@RequestParam("page")int page,@RequestParam("limit")int limit){
        Map<String,Object> map=new HashMap<String,Object>();
        PageInfo<Map<String, Object>> mapPageInfo = productFeignInterface.orderDetail(order_no,page, limit);
        map.put("code",0);
        map.put("msg", "");
        map.put("data",mapPageInfo.getList());
        map.put("count",mapPageInfo.getTotalCount());
        return map;
    }

}
