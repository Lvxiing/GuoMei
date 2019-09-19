package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/myGuoMei")
public class MyGuoMeiController {

    @Autowired
    private ProductFeignInterface productFeignInterface;

    @ResponseBody
    @RequestMapping("/myOrder")
    public String myOrder(HttpSession session){
        Users user = (Users)session.getAttribute("user");
       // Integer uid = user.getId();//测试传死值
        //System.out.println("user = " + user);

        return user.getUserName();
    }
}
