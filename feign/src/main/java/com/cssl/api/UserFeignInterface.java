package com.cssl.api;

import com.cssl.entity.Users;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@FeignClient("service-user")
public interface UserFeignInterface {
    //使用接口映射
    @RequestMapping("/users/findAll")
    public List<Users> findAll();
}
