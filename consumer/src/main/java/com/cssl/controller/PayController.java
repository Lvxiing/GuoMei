package com.cssl.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@Controller
@RequestMapping("pay")
public class PayController {
    @RequestMapping("NotifyServlet")
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("接收到支付宝的异步通知请求——");
        Map<String,String[]> parameterMap=request.getParameterMap();
        System.out.println(parameterMap);
        //成功处理后返回success
        response.getWriter().write("success");
    }
}
