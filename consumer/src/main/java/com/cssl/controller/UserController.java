package com.cssl.controller;

import com.cssl.api.UserFeignInterface;
import com.cssl.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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



}
