package com.cssl.api;

import com.cssl.entity.Category;
import com.cssl.entity.ImagesInfo;
import com.cssl.entity.News;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@FeignClient("service-product")
public interface ProductFeignInterface {

    //首页大轮播图
    @RequestMapping("index/mainImagesData")
    public List<ImagesInfo> mainImagesData();

    //新闻模块
    //查询所有新闻
    @RequestMapping("news/findAllNews")
    List<News> findAllNews();
}
