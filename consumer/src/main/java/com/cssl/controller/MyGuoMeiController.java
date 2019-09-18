package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/myGuoMei")
public class MyGuoMeiController {
    @Autowired
    private ProductFeignInterface productFeignInterface;
}
