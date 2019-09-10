package com.cssl.api;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient("service-user")
public interface UserFeignInterface {
    //使用接口映射
}
