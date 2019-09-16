package com.cssl.api;

import com.cssl.entity.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@FeignClient("service-user")
public interface UserFeignInterface {
    //使用接口映射

    @RequestMapping("/users/ajaxNum")
     String sendMsg(@RequestParam("phoneNum") String phoneNum) throws Exception;

    @RequestMapping("/users/verfiy")
     Map<String,String> login(@RequestParam("phoneNum") String phoneNum, @RequestParam("code") String code);

    @RequestMapping("/users/selectPhone")
      Users  selectPhone(@RequestParam("phoneNum") String phoneNum);

    @RequestMapping("/users/userRegister")
       boolean   userRegister(Users users);

    @RequestMapping("/users/selectUserName")
    Users  selectUserName(@RequestParam("userName") String userName);

    @RequestMapping("/growup/saveGrowup")
      boolean   saveGrowup(Growup growup);

    @RequestMapping("/growup_type/findByTypeName/{typeName}")
     GrowupType findByTypeName(@PathVariable("typeName") String typeName);

    @RequestMapping("/growup/updateGrowupSum")
    int updateGrowupSum(@RequestParam Map map);

    @RequestMapping("/users/updateLoginTime")
     boolean updateLoginTime(Users users);

    @RequestMapping("/growup_detail/saveGrowupdetail")
     int saveGrowupdetail(@RequestParam  Map map);


    //**********后台***********

    @RequestMapping("/users/adminLogin")
     Users adminLogin(Users users);

    @RequestMapping("/users/findUsers/{userName}/{pageIndex}/{pageSize}")
     PageInfo<Users> usersFenYe(@PathVariable("userName") String userName, @PathVariable("pageIndex") int pageIndex, @PathVariable("pageSize") int pageSize);

    @RequestMapping("/users/delUser/{id}")
     boolean delUser(@PathVariable("id") Integer id);

    @RequestMapping("/users/findById/{id}")
     Users findById(@PathVariable("id") Integer id);

    @RequestMapping("/users/updateUser")
     boolean updateUser(@RequestParam Map<String,String> map);

    @RequestMapping("/users/updatePwd")
     boolean  updatePwd(Users users);

    @RequestMapping("/users/selectPwd")
     Users selectPwd(Users user);

    @RequestMapping("/users/findVip/{pageIndex}/{pageSize}")
     PageInfo<Map> userVipFenYe(@RequestBody Map map, @PathVariable("pageIndex") int pageIndex, @PathVariable("pageSize") int pageSize);

    @RequestMapping("/grade/allGrade")
     List<Grade> allGrade();

}
