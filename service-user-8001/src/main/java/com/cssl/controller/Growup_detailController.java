package com.cssl.controller;


import com.cssl.service.GrowupService;
import com.cssl.service.Growup_detailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
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
@RequestMapping("/growup_detail")
public class Growup_detailController {

    @Autowired
    private Growup_detailService growupDetailService;

    @RequestMapping("/saveGrowupdetail")
    public int saveGrowupdetail(@RequestParam  Map map) {
        return growupDetailService.saveGrowupdetail(map);
    }

    @RequestMapping("/findGrowupDetail/{userId}")
    public List<Map> findGrowupDetail(@PathVariable("userId") Integer userId) {
        return growupDetailService.findGrowupDetail(userId);
    }

    @RequestMapping("/detailDescription")
    public Map detailDescription() {
        return growupDetailService.detailDescription();
    }

}
