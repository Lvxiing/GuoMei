package com.cssl.api;

import com.cssl.entity.Category;
import com.cssl.entity.News;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@FeignClient("service-product")
public interface ProductFeignInterface {

    //新闻模块
    @RequestMapping("news/findAllNews")
    List<News> findAllNews();
}
