package com.cssl.controller;

import com.cssl.api.UserFeignInterface;
import com.cssl.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserFeignInterface userFeignInterface;

    //查询所有用户
    @RequestMapping("/findAll")
    @ResponseBody
    public List<Users> findAll(){
        return userFeignInterface.findAll();
    }

    //给手机号码发验证码
    @RequestMapping("/ajaxNum")
    @ResponseBody
    public String sendMsg(@RequestParam("phoneNum") String phoneNum) throws Exception{
        System.out.println("phone:"+phoneNum);
        return userFeignInterface.sendMsg(phoneNum);
    }

//验证手机验证码
    @RequestMapping("/verfiy")
    public String login(@RequestParam("phoneNum") String phoneNum,@RequestParam("code") String code){
        System.out.println("phoneNum:"+phoneNum+","+"code:"+code);
        int num = userFeignInterface.login(phoneNum, code);
        System.out.println("num:"+num);
        if(num==1){
            return "redirect:/index.html";
        }else {
            return "redirect:/login.html";
        }
    }

//判断该手机号是否已被注册
    @RequestMapping("/selectPhone")
    @ResponseBody
    public  int  selectPhone(@RequestParam("phoneNum") String phoneNum){
        return  userFeignInterface.selectPhone(phoneNum);
    }

}
