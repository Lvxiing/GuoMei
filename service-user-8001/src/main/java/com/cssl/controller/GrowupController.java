package com.cssl.controller;


import com.cssl.entity.Growup;
import com.cssl.service.GrowupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@RestController
@RequestMapping("/growup")
public class GrowupController {

    @Autowired
    private GrowupService growupService;

    @RequestMapping("/saveGrowup")
    public  boolean   saveGrowup(@RequestBody Growup growup){
      return   growupService.save(growup);
    }

    @RequestMapping("/updateGrowupSum")
    public int updateGrowupSum(@RequestParam Map map) {
        return  growupService.updateGrowupSum(map);
    }



}
