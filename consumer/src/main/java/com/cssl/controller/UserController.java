package com.cssl.controller;

import com.cssl.api.UserFeignInterface;
import com.cssl.entity.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class UserController {

    @Autowired
    private UserFeignInterface userFeignInterface;




}
