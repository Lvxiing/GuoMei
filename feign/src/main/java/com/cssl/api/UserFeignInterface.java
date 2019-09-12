package com.cssl.api;

import com.cssl.entity.Users;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@FeignClient("service-user")
public interface UserFeignInterface {
    //使用接口映射
    @RequestMapping("/users/findAll")
    public List<Users> findAll();

    @RequestMapping("/users/ajaxNum")
    public String sendMsg(@RequestParam("phoneNum") String phoneNum) throws Exception;

    @RequestMapping("/users/verfiy")
    public int login(@RequestParam("phoneNum") String phoneNum, @RequestParam("code") String code);

    @RequestMapping("/users/selectPhone")
    public  int  selectPhone(@RequestParam("phoneNum") String phoneNum);

    @RequestMapping("/users/userRegister")
    public   boolean   userRegister(Users users);
}
