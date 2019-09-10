package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ProductController {
    @Autowired
    private ProductFeignInterface productFeignInterface;

    @RequestMapping("findAll2")
    @ResponseBody
    public List<Category> findAll(){
        return productFeignInterface.findAll();
    }
}
