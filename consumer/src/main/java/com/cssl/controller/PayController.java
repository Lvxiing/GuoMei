package com.cssl.controller;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.alipay.api.request.AlipayTradeRefundRequest;
import com.cssl.api.ProductFeignInterface;
import com.cssl.api.RedisFeignInterface;
import com.cssl.api.UserFeignInterface;
import com.cssl.entity.Users;
import com.cssl.util.AlipayConfig;
import com.mongodb.util.JSON;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Controller
@RequestMapping("pay")
public class PayController {

    @Autowired
    private ProductFeignInterface productFeignInterface;
    @Autowired
    private UserFeignInterface userFeignInterface;

    @Autowired
    private RedisFeignInterface redisFeignInterface;

    @RequestMapping("NotifyServlet")
    protected void service(HttpServletRequest request, HttpServletResponse response) throws AlipayApiException, IOException {
        System.out.println("接收到支付宝的异步通知请求——");
        Map<String, String[]> parameterMap = request.getParameterMap();
        System.out.println(parameterMap);
        //成功处理后返回success
        response.getWriter().write("success");
    }

    @RequestMapping("refund")
    public String refund(@RequestParam Map<String,Object> map, HttpServletResponse response,HttpSession session) throws IOException, AlipayApiException {
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        //获得初始化的AlipayClient
        AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
        //设置请求参数
        AlipayTradeRefundRequest alipayRequest = new AlipayTradeRefundRequest();
        //商户订单号，必填
        String out_trade_no = new String(map.get("no").toString());
        //需要退款的金额，该金额不能大于订单金额，必填
        String refund_amount = new String(map.get("price").toString());
        //标识一次退款请求，同一笔交易多次退款需要保证唯一，如需部分退款，则此参数必传
        String out_request_no = new String(UUID.randomUUID().toString());

        alipayRequest.setBizContent("{\"out_trade_no\":\""+ out_trade_no +"\","
                + "\"refund_amount\":\""+ refund_amount +"\","
                + "\"out_request_no\":\""+ out_request_no +"\"}");
        //请求
        String result = alipayClient.execute(alipayRequest).getBody();

        //退款成功后的操作
        String cid = productFeignInterface.returnSuccess(Integer.valueOf(map.get("cid").toString()));
        if("success".equals(cid)){
            return "redirect:/pay-success.html";
        }
        return null;

    }
    //支付请求接口
    @RequestMapping("ali/{no}/{money}/45798651653253846584563218*&&&45445/{ifUseScore}")
    public void ali(HttpSession session, @PathVariable("no") String no, @PathVariable("money") String money,@PathVariable("ifUseScore")String ifUseScore, HttpServletResponse response, HttpServletRequest request) throws Exception {
        Users user = (Users) session.getAttribute("user");
        //如果购物时消费了所有美豆,则把该用户的美豆清零
        if("yes".equals(ifUseScore)){
            int count = userFeignInterface.consumeScore(user.getId());
        }

        if(orderSuccess(user.getId(),no,money)){
            //设置编码
            response.setContentType("text/html;charset=utf-8");
            PrintWriter out = response.getWriter();
            //获得初始化的AlipayClient
            AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
            //设置请求参数
            AlipayTradePagePayRequest aliPayRequest = new AlipayTradePagePayRequest();
            aliPayRequest.setReturnUrl(AlipayConfig.return_url);
            aliPayRequest.setNotifyUrl(AlipayConfig.notify_url);

            //商户订单号，后台可以写一个工具类生成一个订单号，必填
            String order_number = new String(no);
            //付款金额，从前台获取，必填
            String total_amount = new String(money);
            //订单名称，必填
            String subject = new String("国美商品");
            aliPayRequest.setBizContent("{\"out_trade_no\":\"" + order_number + "\","
                    + "\"total_amount\":\"" + total_amount + "\","
                    + "\"subject\":\"" + subject + "\","
                    + "\"product_code\":\"FAST_INSTANT_TRADE_PAY\"}");
            //请求
            String result = alipayClient.pageExecute(aliPayRequest).getBody();
            //输出
            out.println(result);//以下写自己的订单代码
        }
    }

    public boolean orderSuccess(Integer uid,String orderNo,String money){
        String s = productFeignInterface.orderSuccess(orderNo);
        if("success".equals(s)){
            Map maps = new HashMap();
            maps.put("userId", uid);
            final String typeName = "购物";
            maps.put("typeName", typeName);
            int ucount = userFeignInterface.updateGrowupSum(maps);
            int scount = userFeignInterface.saveGrowupdetail(maps);
            maps.put("money",money);
            userFeignInterface.updateScoreSum(maps);
            userFeignInterface.saveScoreDetail(maps);
            //时间格式转换
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            //将此次获得的成长值详细说明存入redis中
            Map desMap = userFeignInterface.detailDescription();
            Object gdetailId = desMap.get("gdetailId");
            Object gdetailTime = desMap.get("gdetailTime");
            try {
                Date parse = sdf.parse(gdetailTime.toString());
                redisFeignInterface.set(gdetailId.toString(),"订单号:"+orderNo,-1);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            return true;
        }
        return false;
    }
}
