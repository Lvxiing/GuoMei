package com.cssl.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.Cart;
import com.cssl.entity.Goods;
import com.cssl.entity.OrderDetail;
import com.cssl.entity.Orders;
import com.cssl.mapper.OrdersMapper;
import com.cssl.service.CartService;
import com.cssl.service.GoodsService;
import com.cssl.service.Order_detailService;
import com.cssl.service.OrdersService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.util.GenerateNum;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
public class OrdersServiceImpl extends ServiceImpl<OrdersMapper, Orders> implements OrdersService {
    @Autowired
    private OrdersMapper ordersMapper;

    @Autowired
    private Order_detailService orderDetailService;

    @Autowired
    private CartService cartService;

    @Autowired
    private GoodsService goodsService;

    @Override
    public Page<Map<String, Object>> findOrdersByUserId(Map<String, Object> map) {
        Integer pageSize = new Integer(map.get("pageSize").toString());
        Integer pageIndex = new Integer(map.get("pageIndex").toString());
        Page<Map<String, Object>> page = PageHelper.startPage(pageIndex, pageSize);
        ordersMapper.findOrdersByUserId(map);
        return page;
    }

    @Override
    public List<Map<String, Object>> findOrdersDetail(Integer oid) {
        return ordersMapper.findOrdersDetail(oid);
    }

    @Override
    public List<Map<String, Object>> findTotal(Integer uid) {
        return ordersMapper.findTotal(uid);
    }

    //根据订单编号查收货信息
    @Override
    public Map<String, Object> findAddressByOrder(Integer oid) {
        return ordersMapper.findAddressByOrder(oid);
    }

    @Override
    public Map<String, Object> addOrder(Map<String, Object> map) {
        Integer zfbs = Integer.valueOf(map.get("zfbs").toString());
        boolean res = false; //表示下单是否成功
        Orders orders = new Orders();
        orders.setUserId(Integer.valueOf(map.get("uid").toString()));
        orders.setAddressId(Integer.valueOf(map.get("aid").toString()));
        Date day = new Date();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        orders.setOrderTime(day);
        orders.setStatus(1);
        orders.setOrderNo(GenerateNum.getInstance().GenerateOrder()); //调用生产订单号类拿到订单号
        double totalMoney = Double.valueOf(map.get("sumPrice").toString()); //总金额(前台传入)
        List<Map<String, Object>> list = (List<Map<String, Object>>) map.get("list"); //拿到封装好的商品数据
        //金额转换,保留两位小数
        BigDecimal decimal = new BigDecimal(totalMoney);
        orders.setTotal(decimal.setScale(2, BigDecimal.ROUND_HALF_UP));
        if(zfbs == 0){
            orders.setStatus(7);
        }
        //新增订单
        int result = ordersMapper.addOrder(orders);
        if (result > 0) { //订单下单成功
            for (Map m : list) {
                //保存订单详情信息
                OrderDetail orderDetail = new OrderDetail();
                orderDetail.setGoodsId(Integer.valueOf(m.get("gid").toString()));
                orderDetail.setOrderId(orders.getId());
                orderDetail.setNum(Integer.valueOf(m.get("num").toString()));
                double money = Integer.valueOf(m.get("num").toString()) * Double.valueOf(m.get("price").toString());
                BigDecimal decimal2 = new BigDecimal(money);
                orderDetail.setMoney(decimal2.setScale(2, BigDecimal.ROUND_HALF_UP));
                orderDetailService.save(orderDetail);

                //从购物车中删除该商品
                cartService.remove(new QueryWrapper<Cart>().eq("user_id", Integer.valueOf(map.get("uid").toString())).eq("goods_id", Integer.valueOf(m.get("gid").toString())));

                //减少库存
                Goods goods = new Goods();
                goods.setId(Integer.valueOf(m.get("gid").toString()));
                Goods one = goodsService.getOne(new QueryWrapper<Goods>().eq("goods_id", Integer.valueOf(m.get("gid").toString())));
                goods.setStock(one.getStock() - Integer.valueOf(m.get("num").toString()));
                goodsService.updateById(goods);
                if (goods.getStock() == 0) { //表示无库存,商品进行下架
                    Goods upGoods = new Goods();
                    upGoods.setId(Integer.valueOf(m.get("gid").toString()));
                    upGoods.setState(0);
                    goodsService.updateById(upGoods);
                }
            }
            res = true;
        }

        Map<String, Object> param = new HashMap<>();
        param.put("orderNo", orders.getOrderNo());
        param.put("times", orders.getOrderTime());
        return param;
    }

    @Override
    public List<Map<String, Object>> userPayInfo(Integer oid) {
        return ordersMapper.userPayInfo(oid);
    }

    @Override
    public Map<String, Object> findGoodsByOno(Map<String, Object> map) {
        return ordersMapper.findGoodsByOno(map);
    }

    @Override
    public Page<Map<String, Object>> returnInfo(int pageIndex, int pageSize) {
        Page<Map<String, Object>> page = PageHelper.startPage(pageIndex, pageSize);
        ordersMapper.returnInfo();
        return page;
    }


    @Override
    public List<Map<String, Object>> byGoodId(String order_no) {
        return ordersMapper.byGoodId(order_no);
    }

    @Override
    public Page<Map<String, Object>> orderList(Map<String, Object> map, int pageIndex, int pageSize) {
        Page<Map<String, Object>> page = PageHelper.startPage(pageIndex, pageSize);
        ordersMapper.orderList(map);
        return page;
    }

    @Override
    public List<Map<String, Object>> ByIdOrders(String orderNo) {
        return ordersMapper.ByIdOrders(orderNo);
    }

    @Override
    public int updateStatus(Orders orders) {
        return ordersMapper.updateStatus(orders);
    }

    @Override
    public int deleteOrder(int orderId) {
        return ordersMapper.deleteOrder(orderId);
    }

    @Override
    public Map<String, Object> orderQuantity() {
        //计算本月退单数量,订单数量和金额,本月订单实际金额,本月未付款金额
        Map<String, Object> maps = ordersMapper.returnQuantity();
        Map<String, Object> maps1 = ordersMapper.orderQuantity();
        Map<String, Object> map = new HashMap<>();
        map.put("total", ordersMapper.orderAmount());  //本月实际得到得金额
        map.put("returnNum", maps.get("nums"));
        map.put("returnMoney", maps.get("money"));
        map.put("nums", maps1.get("nums"));        //本月订单数量
        map.put("money", maps1.get("money"));     //本月订单金额
        //计算未付金额
        String str = maps1.get("money").toString();
        double money = Double.parseDouble(str);
        double unpaidAmount = money - ordersMapper.orderAmount();
        map.put("unpaidAmount ", unpaidAmount);
        return map;
    }

    @Override
    public Map<String, Object> weekOrderQuantity() {
        //一周订单金额
        Map<String, Object> map1 = new HashMap<>();
        map1.put("name", "订单金额");
        //一周退款金额
        Map<String, Object> map2 = new HashMap<>();
        map2.put("name", "退款金额");
        //一周实际金额
        Map<String, Object> map3 = new HashMap<>();
        map3.put("name", "实际金额");
        //一周未付金额
        Map<String, Object> map4 = new HashMap<>();
        map4.put("name", "未付金额");

        List<String> xcontent = new ArrayList<>();   //x轴
        List<Object> data1 = new ArrayList<>();
        for (Map<String, Object> i : ordersMapper.weekOrderQuantity()) {
            xcontent.add((String) i.get("times"));
            data1.add(i.get("money"));
        }

        List<Object> data2 = new ArrayList<>();
        List<String> list2 = new ArrayList<>();
        for (Map<String, Object> i : ordersMapper.weekReturnQuantity()) {
            data2.add(i.get("money"));
            list2.add((String) i.get("times"));
        }

        List<Object> data3 = new ArrayList<>();
        List<String> list3 = new ArrayList<>();    //差集
        for (Map<String, Object> i : ordersMapper.weekOrderAmount()) {
            data3.add(i.get("money"));
            list3.add((String) i.get("times"));
        }

        List<Object> data4 = new ArrayList<>();
        List<String> list4 = new ArrayList<>();
        for (Map<String, Object> i : ordersMapper.weekUnpaidAmount()) {
            data4.add(i.get("money"));
            list4.add((String) i.get("times"));
        }

        if (list2.size() != xcontent.size()) {
            data2 = differenceSet(xcontent, list2, data2);
        }
        if (list3.size() != xcontent.size()) {
            data3 = differenceSet(xcontent, list3, data3);
        }
        if (list4.size() != xcontent.size()) {
            data4 = differenceSet(xcontent, list4, data4);
        }

        System.out.println("data3:" + data3);
        map1.put("data", data1);
        map2.put("data", data2);
        map3.put("data", data3);
        map4.put("data", data4);
        //返回数据
        List<Map<String, Object>> data = new ArrayList<>();
        data.add(map1);
        data.add(map2);
        data.add(map3);
        data.add(map4);

        Map<String, Object> list = new HashMap<>();
        list.put("xcontent", xcontent);
        list.put("data", data);

        return list;
    }

    //求差集返回差集所在位置
    private List<Object> differenceSet(List<String> list1, List<String> list2, List<Object> data) {
        List<String> exists = new ArrayList<String>(list1);
        //求差集
        exists.removeAll(list2);
        System.out.println("exists:" + exists);
        //查询差集得所在位置
        List<Object> existss = new ArrayList<Object>();
        if (list2.size() > 0) {
            for (int i = 0; i < list1.size(); i++) {
                for (int j = 0; j < exists.size(); j++) {
                    if (list1.get(i).equals(exists.get(j))) {
                        existss.add(i);
                    }
                }
            }
        }
        List<Integer> datas = Arrays.asList(new Integer[list1.size()]);
        List<Object> arrList = new ArrayList(datas);
        if (data.size() > 0) {
            for (int n = 0; n < data.size(); n++) {
                arrList.set(n, data.get(n));
            }
        }

        if (existss.size() > 0) {
            for (int k = 0; k < existss.size(); k++) {
                arrList.add((int) existss.get(k), 0);
            }
            //去除null
            for (int k = 0; k < arrList.size(); k++) {
                arrList.remove(null);
            }
        } else {
            for (int i = 0; i < list1.size(); i++) {
                arrList.set(i, 0);
            }
        }

        return arrList;
    }

    @Override
    public List<Map<String, Object>> weekOrder() {
        List<Map<String, Object>> list = new ArrayList<>();
        Map<String, Object> map = null;
        for (Map<String, Object> i : ordersMapper.weekOrderQuantity()) {
            map = new HashMap<>();
            map.put("times", i.get("times"));
            map.put("money", 0);
            map.put("unpaidAmount", 0);
            map.put("returnMoney", 0);
            map.put("amountMoney", 0);
            if (ordersMapper.weekOrderQuantity().size() != 0) {
                map.put("money", i.get("money"));
            }
            if (ordersMapper.weekReturnQuantity().size() != 0) {
                for (Map<String, Object> j : ordersMapper.weekReturnQuantity()) {
                    map.put("returnMoney", 0);
                    if (j.get("times").equals(i.get("times"))) {
                        map.put("returnMoney", j.get("money"));
                        break;
                    }
                }
            }
            if (ordersMapper.weekOrderAmount().size() != 0) {
                for (Map<String, Object> j : ordersMapper.weekOrderAmount()) {
                    map.put("amountMoney", 0);
                    if (j.get("times").equals(i.get("times"))) {
                        map.put("amountMoney", j.get("money"));
                        break;
                    }
                }

            }

            if (ordersMapper.weekUnpaidAmount().size() != 0) {
                for (Map<String, Object> j : ordersMapper.weekUnpaidAmount()) {
                    map.put("unpaidAmount", 0);
                    if (j.get("times").equals(i.get("times"))) {
                        map.put("unpaidAmount", j.get("money"));
                        break;
                    }
                }
            }

            list.add(map);
        }
        return list;
    }

    @Override
    public Page<Map<String, Object>> orderDetail(String order_no, int pageIndex, int pageSize) {
        Page<Map<String, Object>> page = PageHelper.startPage(pageIndex, pageSize);
        ordersMapper.orderDetail(order_no);
        return page;
    }
}
