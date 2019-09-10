package com.cssl.controller;

import com.cssl.api.UserFeignInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class UserController {

    @Autowired
    private UserFeignInterface userFeignInterface;




}
