package com.cssl.api;

import com.cssl.entity.Category;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@FeignClient("service-product")
public interface ProductFeignInterface {
    //使用接口映射
    @RequestMapping("category/findAll")
    List<Category> findAll();
}
