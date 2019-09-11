package com.cssl.controller;


import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.ImagesInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/index")
public class IndexController {

    @Autowired
    private ProductFeignInterface productFeignInterface;

    //首页轮播图
    @RequestMapping("mainImagesData")
    @ResponseBody
    public List<ImagesInfo> mainImagesData(){
        return productFeignInterface.mainImagesData();
    }




}
