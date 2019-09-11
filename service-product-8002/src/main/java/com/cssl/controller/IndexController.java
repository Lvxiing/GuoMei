package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.ImagesInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@RequestMapping("/index")
@Controller
public class IndexController {

    @Autowired
    private ProductFeignInterface productFeignInterface;

    @Autowired
    private MongoTemplate mongoTemplate;


    //首页轮播图
    @ResponseBody
    @RequestMapping("mainImagesData")
    public List<ImagesInfo> mainImagesData(){
        List<ImagesInfo> imagesInfoList = mongoTemplate.findAll(ImagesInfo.class);
        return imagesInfoList;
    }

}
