package com.cssl.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Orders;
import com.cssl.entity.PageInfo;
import com.cssl.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/Orders")
@Controller
public class OrdersController {
    @Autowired
    private ProductFeignInterface productFeignInterface;

    //-------------------------前台------------------------
    //用户下单信息
    @RequestMapping("orderInfo")
    @ResponseBody
    public Map<String,Object> orderInfo(HttpSession session, @RequestParam Map<String,Object> map){
        Users users =(Users) session.getAttribute("user");
        return productFeignInterface.orderInfo(users.getId(),map);
    }
    //用户下单
    @RequestMapping("addOrders")
    @ResponseBody
    public String addOrders(HttpSession session,@RequestParam Map<String,Object> map){
        Users users =(Users) session.getAttribute("user");
        map.put("uid",users.getId());
        return productFeignInterface.addOrders(map);
    }


    //用户订单
    @RequestMapping("findOrdersByUserId")
    @ResponseBody
    public PageInfo<Map<String, Object>> findOrdersByUserId(@RequestParam Map<String, Object> map) {
        map.put("uid",18);
        return productFeignInterface.findOrdersByUserId(map);
    }
    //订单下的详细信息
    @RequestMapping("findOrdersDetail")
    @ResponseBody
    public List<Map<String,Object>> findOrdersDetail(@RequestParam("oid") Integer oid){
        return productFeignInterface.findOrdersDetail(oid);
    }

    //根据订单编号查询订单信息
    @RequestMapping("findOrders")
    @ResponseBody
    public Orders findOrders(@RequestParam("oid") Integer oid){
        return productFeignInterface.findOrders(oid);
    }

    //查询用户订单的待付款待收货总记录数
    @RequestMapping("findTotal")
    @ResponseBody
    List<Map<String,Object>> findTotal(@RequestParam(value = "uid", required=false) Integer uid){

        return productFeignInterface.findTotal(18);
    }
    //根据订单号查询地址表相关信息
    @RequestMapping("findAddressByOrder")
    @ResponseBody
    public Map<String,Object> findAddressByOrder(@RequestParam("oid") Integer oid){
        return productFeignInterface.findAddressByOrder(oid);
    }

    //-------------------------后台------------------------
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
    public int deleteOrders(@RequestParam("orderId")Integer orderId,@RequestParam("status")Integer status){
        System.out.println("status"+status);
        return productFeignInterface.deleteOrders(orderId,status);
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
