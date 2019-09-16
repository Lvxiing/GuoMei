package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.GrowupType;
import com.cssl.service.Growup_typeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@RestController
@RequestMapping("/growup_type")
public class Growup_typeController {

    @Autowired
    private Growup_typeService growup_typeService;

    @RequestMapping("/findByTypeName/{typeName}")
    public GrowupType findByTypeName(@PathVariable("typeName") String typeName){
       return  growup_typeService.getOne(new QueryWrapper<GrowupType>().eq("type_name",typeName));
    }

}
