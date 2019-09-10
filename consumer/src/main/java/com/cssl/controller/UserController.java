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

    @RequestMapping("/findAll")
    @ResponseBody
    public List<Users> findAll(){
        return userFeignInterface.findAll();
    }

    @RequestMapping("/ajaxNum")
    @ResponseBody
    public String sendMsg(@RequestParam("phoneNum") String phoneNum) throws Exception{
        System.out.println("phone:"+phoneNum);
        return userFeignInterface.sendMsg(phoneNum);
    }


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

}
