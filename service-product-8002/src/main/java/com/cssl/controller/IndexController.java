package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class IndexController {
    @Autowired
    private ProductFeignInterface productFeignInterface;

}
