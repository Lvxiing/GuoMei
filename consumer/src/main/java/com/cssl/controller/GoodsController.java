package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Category;
import com.cssl.entity.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/goods")
public class GoodsController {

    @Autowired
    private ProductFeignInterface productFeignInterface;



}
