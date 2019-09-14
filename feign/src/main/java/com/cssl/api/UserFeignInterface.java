package com.cssl.api;

import com.cssl.entity.Grade;
import com.cssl.entity.PageInfo;
import com.cssl.entity.Users;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@FeignClient("service-user")
public interface UserFeignInterface {
    //使用接口映射
    @RequestMapping("/users/findAll")
    public List<Users> findAll();

    @RequestMapping("/users/ajaxNum")
    public String sendMsg(@RequestParam("phoneNum") String phoneNum) throws Exception;

    @RequestMapping("/users/verfiy")
    public Map<String,String> login(@RequestParam("phoneNum") String phoneNum, @RequestParam("code") String code);

    @RequestMapping("/users/selectPhone")
    public  Users  selectPhone(@RequestParam("phoneNum") String phoneNum);

    @RequestMapping("/users/userRegister")
    public   boolean   userRegister(Users users);

    @RequestMapping("/users/selectUserName")
    public  int  selectUserName(@RequestParam("userName") String userName);


    //**********后台***********

    @RequestMapping("/users/adminLogin")
    public Users adminLogin(Users users);

    @RequestMapping("/users/findUsers/{userName}/{pageIndex}/{pageSize}")
    public PageInfo<Users> UsersFenYe(@PathVariable("userName") String userName, @PathVariable("pageIndex") int pageIndex, @PathVariable("pageSize") int pageSize);

    @RequestMapping("/users/delUser/{id}")
    public boolean delUser(@PathVariable("id") Integer id);

    @RequestMapping("/users/findById/{id}")
    public Users findById(@PathVariable("id") Integer id);

    @RequestMapping("/users/updateUser")
    public boolean updateUser(@RequestParam Map<String,String> map);

    @RequestMapping("/users/updatePwd")
    public boolean  updatePwd(Users users);

    @RequestMapping("/users/selectPwd")
    public Users selectPwd(Users user);

    @RequestMapping("/userinfo/findVip/{pageIndex}/{pageSize}")
    public PageInfo<Map> UserInfoFenYe(@RequestBody Map map, @PathVariable("pageIndex") int pageIndex, @PathVariable("pageSize") int pageSize);

    @RequestMapping("/grade/allGrade")
    public List<Grade> allGrade();

}
