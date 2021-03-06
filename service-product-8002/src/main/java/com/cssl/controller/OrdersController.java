package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.cssl.entity.*;
import com.cssl.mapper.Order_detailMapper;
import com.cssl.service.*;
import com.github.pagehelper.Page;
import com.netflix.discovery.converters.Auto;
import org.hibernate.validator.constraints.URL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.rmi.server.UID;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * <p>
 * 前端控制器
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

    @Autowired
    private GoodsService goodsService;

    @Autowired
    private EvaluateService evaluateService;

    @Autowired
    private AddressService addressService;

    @Autowired
    private CartService cartService;

    @Autowired
    private Coupon_receiveService coupon_receiveService;

    //-----------------------------前台模块----------------------------

    //退款成功后
    @RequestMapping("returnSuccess")
    @ResponseBody
    public String returnSuccess(@RequestParam Integer cid){
        OrderDetail orderDetail = new OrderDetail();
        orderDetail.setId(cid);
        orderDetail.setDstatus(4);
        boolean b = orderDetailService.updateById(orderDetail);
        if (b) {

            return "success";
        }
        return "error";
    }

    //用户申请退款
    @RequestMapping("returnMoney")
    @ResponseBody
    public String returnMoney(@RequestParam Map<String, Object> map) {

        Orders orders = ordersService.getOne(new QueryWrapper<Orders>().eq("order_no", map.get("no")));
        OrderDetail orderDetail = new OrderDetail();
        orderDetail.setDstatus(1);//退货
        if(Integer.valueOf(map.get("bs").toString())==2){
            orderDetail.setDstatus(3);//退货退款
        }
        boolean update = orderDetailService.update(orderDetail, new UpdateWrapper<OrderDetail>().eq("order_id", orders.getId()).eq("goods_id", map.get("gid")));
        if (update) {
            String json = "{\"code\":\"success\"}";
            return json;
        }
        return "{\"msg\":\"error\"}";
    }




    //用户支付成功,更新数据库的支付时间
    @RequestMapping("orderSuccess")
    @ResponseBody
    public String orderSuccess(@RequestParam String orderNo) {

        //支付成功时间
        Orders order = ordersService.getOne(new QueryWrapper<Orders>().eq("order_no", orderNo));
        order.setPayDate(new Date());
        if (order.getStatus() == 7) {
            order.setStatus(7);//门店自提
        } else {
            order.setStatus(2);//已付款
        }

        boolean b = ordersService.updateById(order);
        return b ? "success" : "error";
    }


    //用户下单信息
    @RequestMapping("orderInfo")
    @ResponseBody
    public Map<String, Object> orderInfo(@RequestParam("uid") Integer uid, @RequestParam Map<String, Object> map) {
        Map<String, Object> data = new HashMap<>();
        data.put("goods", packData(map.get("goodsId").toString(), map.get("num").toString(), map.get("vipIdArr").toString() != null ? map.get("vipIdArr").toString() : null, uid));
        data.put("uid", uid);
        return data;
    }

    //封装数据
    public List<Map<String, Object>> packData(String goodsId, String nums, String vipIdArr, Integer uid) {
        List<Map<String, Object>> goodsList = new ArrayList<>();
        String[] gid = goodsId.split(",");
        String[] num = nums.split(",");
        List<String> vipIdList = null;
        if (vipIdArr != null) {
            String[] vipArr = vipIdArr.split(",");
            vipIdList = Arrays.asList(vipArr);
        }
        for (int i = 0; i < gid.length; i++) {
            Goods goods = goodsService.getOne(new QueryWrapper<Goods>().eq("goods_id", gid[i]));
            Map<String, Object> param = new HashMap<>();
            param.put("gid", goods.getId());
            param.put("title", goods.getTitle());
            param.put("img", goods.getMainImg());
            param.put("price", goods.getPrice());
            param.put("num", num[i]);
            if (vipIdList != null && vipIdList.contains(goods.getId().toString())) { //表示为会员商品
                Cart one = cartService.getOne(new QueryWrapper<Cart>().eq("user_id", uid).eq("goods_id", goods.getId()));
                param.put("price", one.getPrice());
                param.put("bs", "vip");
            }
            goodsList.add(param);
        }
        return goodsList;
    }

    //用户下单
    @RequestMapping("addOrders")
    @ResponseBody
    public Map<String, Object> addOrders(@RequestParam Map<String, Object> map) {
        List<Map<String, Object>> list = packData(map.get("goodsId").toString(), map.get("num").toString(), map.get("vipIdArr").toString() != null ? map.get("vipIdArr").toString() : null, Integer.valueOf(map.get("uid").toString()));
        map.put("list", list);
        Map<String, Object> b = ordersService.addOrder(map);
        Map<String, Object> param = new HashMap<>();

        if (map.get("couId") != null && !"".equals(map.get("couId"))) {
            String[] couId = map.get("couId").toString().split(",");
            Integer uid = Integer.valueOf(map.get("uid").toString());
            for (int i = 0; i < couId.length; i++) {
                CouponReceive couponReceive = new CouponReceive();
                couponReceive.setStatus(1);
                coupon_receiveService.update(couponReceive, new UpdateWrapper<CouponReceive>().eq("user_id", uid).eq("coupon_id", couId[i]));
            }
        }
        if (b != null) {
            // 生成支付单号
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
            String payno = simpleDateFormat.format(Calendar.getInstance().getTime());
            param.put("code", "yes");
            param.put("orderNo", b.get("orderNo"));
            param.put("times", b.get("times"));
            param.put("payno", payno);
            return param;
        }
        param.put("code", "no");
        return param;
    }

    //用户支付订单详情
    @RequestMapping("userPayInfo")
    @ResponseBody
    public Map<String, Object> userPayInfo(@RequestParam Map<String, Object> map) {
        Map<String, Object> data = new HashMap<>();
        //查询当前订单信息
        Orders one = ordersService.getOne(new QueryWrapper<Orders>().eq("order_no", map.get("orderNo")));
        data.put("orders", one);
        //查询当前订单下进行购买的商品详情
        List<Map<String, Object>> maps = ordersService.userPayInfo(one.getId());
        data.put("goods", maps);
        //用于查询当前收货地址信息
        Map<String, Object> param = new HashMap<>();
        param.put("userid", map.get("uid"));
        param.put("aid", one.getAddressId());
        List<Address> addresses = addressService.showAddress(param);
        data.put("addressInfo", addresses.get(0));
        return data;
    }


    //用户订单
    @RequestMapping("findOrdersByUserId")
    @ResponseBody
    public PageInfo<Map<String, Object>> findOrdersByUserId(@RequestParam Map<String, Object> map) {
        PageInfo<Map<String, Object>> pages = new PageInfo<>();
        Page<Map<String, Object>> page = ordersService.findOrdersByUserId(map);
        pages.setList(page.getResult());
        pages.setPageNo(page.getPageNum());
        pages.setTotalCount((int) page.getTotal());
        pages.setPageSize(page.getPageSize());
        pages.setPageCount(page.getPages());
        return pages;
    }


    //根据订单编号查询订单明细
    @RequestMapping("findOrdersDetail")
    @ResponseBody
    public List<Map<String, Object>> findOrdersDetail(@RequestParam("oid") Integer oid) {
        return ordersService.findOrdersDetail(oid);
    }

    //根据订单编号查询订单信息
    @RequestMapping("findOrders")
    @ResponseBody
    public Orders findOrders(@RequestParam("oid") Integer oid) {
        return ordersService.getOne(new QueryWrapper<Orders>().eq("order_id", oid));
    }

    //查询用户订单的待付款待收货总记录数
    @RequestMapping("findTotal")
    @ResponseBody
    public List<Map<String, Object>> findTotal(@RequestParam("uid") Integer uid) {
        return ordersService.findTotal(uid);
    }

    //根据订单号查询地址表的相关信息
    @RequestMapping("findAddressByOrder")
    @ResponseBody
    public Map<String, Object> findAddressByOrder(@RequestParam("oid") Integer oid) {
        return ordersService.findAddressByOrder(oid);
    }

    //根据订单号查询商品
    @RequestMapping("findGoodsByOno")
    @ResponseBody
    public Map<String, Object> findGoodsByOno(@RequestParam Map<String, Object> map) {
        return ordersService.findGoodsByOno(map);
    }

    //-----------------------------后台模块----------------------------


    //查询所有订单详情
    @RequestMapping("/orderList/{pageIndex}/{pageSize}/{orderNo}/{name}")
    @ResponseBody
    public PageInfo<Map<String, Object>> orderList(@PathVariable("pageIndex") Integer pageIndex, @PathVariable("pageSize") Integer pageSize, @PathVariable("orderNo") String orderNo, @PathVariable("name") String name) {
        Map<String, Object> map = new HashMap<>();
        map.put("orderNo", orderNo);
        map.put("name", name);
        Page<Map<String, Object>> maps = ordersService.orderList(map, pageIndex, pageSize);
        PageInfo<Map<String, Object>> page = new PageInfo<>();
        List<Map<String, Object>> result = maps.getResult();
        //封装查询数据
        page.setList(result);
        //封装总记录数
        page.setTotalCount((int) maps.getTotal());
        return page;
    }

    //修改回显
    @RequestMapping("/ByIdOrders/{orderNo}")
    @ResponseBody
    public List<Map<String, Object>> ByIdOrders(@PathVariable("orderNo") String orderNo) {
        return ordersService.ByIdOrders(orderNo);
    }

    //修改订单状态
    @RequestMapping("/updateStatus")
    @ResponseBody
    public int updateStatus(@RequestParam("orderNo") String orderNo, @RequestParam("status") int status) {
        Orders orders = new Orders();
        orders.setStatus(status);
        orders.setOrderNo(orderNo);
        //判断修改状态试是否是5已完成(如果是将引入评价表状态改为0为未评价)
        if (Integer.valueOf(status) == 5) {  //查询订单中得商品
            List<Map<String, Object>> maps = ordersService.byGoodId(orderNo);
            //循环写入评价表
            for (Map<String, Object> list : maps) {
                Evaluate evaluate = new Evaluate();
                evaluate.setGoodsId(Integer.valueOf(list.get("goods_id").toString()));
                evaluate.setUserId(Integer.valueOf(list.get("user_id").toString()));
                evaluate.setOid(Integer.valueOf(list.get("order_id").toString()));
                evaluate.setTime(new Date());
                evaluate.setState(0);   //未评价
                evaluateService.save(evaluate);
            }
        }
        return ordersService.updateStatus(orders);

    }

    //删除订单
    @RequestMapping("/deleteOrders")
    @ResponseBody
    public int deleteOrders(@RequestParam("orderId") Integer orderId, @RequestParam("status") Integer status) {
        //先删除订单详情表
        int i = orderDetailService.deletOrderDetail(orderId);
        //删除订单时判断是否时已完成状态如果是删除评价表相关信息(因为评价表信息是通过订单状态添加进去)
        if (status == 5) {
            //删除评价表信息
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("order_id", orderId);
            evaluateService.removeByMap(map);
        }
        int num = 0;
        if (i > 0) {
            num = ordersService.deleteOrder(orderId);
        }
        return num;
    }

    //计算本月退单数量,订单数量和金额,本月订单实际金额,本月未付款金额
    @RequestMapping("/inquiryAmount")
    @ResponseBody
    public Map<String, Object> inquiryAmount() {
        return ordersService.orderQuantity();
    }

    //查询最近一周的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/weekInquiryAmount")
    @ResponseBody
    public Map<String, Object> weekInquiryAmount() {
        return ordersService.weekOrderQuantity();
    }

    //查询最近一周对应日期的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/weekOrder")
    @ResponseBody
    public List<Map<String, Object>> weekOrder() {
        return ordersService.weekOrder();
    }


    //查看订单详情购买商品信息
    @RequestMapping("/orderDetail")
    @ResponseBody
    public PageInfo<Map<String, Object>> orderDetail(@RequestParam("order_no") String order_no, @RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageInfo<Map<String, Object>> pages = new PageInfo<>();
        Page<Map<String, Object>> maps = ordersService.orderDetail(order_no, page, limit);
        List<Map<String, Object>> result = maps.getResult();
        //封装查询数据
        pages.setList(result);
        //封装总记录数
        pages.setTotalCount((int) maps.getTotal());
        return pages;
    }

    //查询申请退货信息
    @RequestMapping("/returnInfo")
    @ResponseBody
    public PageInfo<Map<String, Object>> returnInfo(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageInfo<Map<String, Object>> pages = new PageInfo<>();
        Page<Map<String, Object>> maps = ordersService.returnInfo(page, limit);
        List<Map<String, Object>> result = maps.getResult();
        //封装查询数据
        pages.setList(result);
        //封装总记录数
        pages.setTotalCount((int) maps.getTotal());
        return pages;
    }

    //申请退款修改状态
    @RequestMapping("/updateReturnStatus")
    @ResponseBody
    public boolean updateReturnStatus(@RequestParam("detail_id")Integer detail_id){
        OrderDetail orderDetail=new OrderDetail();
        orderDetail.setDstatus(2);
        orderDetail.setId(detail_id);
        boolean b = orderDetailService.updateById(orderDetail);
        return b;
    }
}
