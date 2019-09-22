package com.cssl.controller;


import com.cssl.entity.Street;
import com.cssl.service.StreetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Controller
@RequestMapping("/street")
public class StreetController {

    @Autowired
    private StreetService streetService;

    @RequestMapping("findStreetByArea")
    @ResponseBody
    public List<Street> findStreetByArea(@RequestParam Integer district_id){
        return streetService.findStreetByArea(district_id);
    }
    @RequestMapping("findNameByStreetId")
    @ResponseBody
    public String findNameByStreetId(@RequestParam Integer street_id){
        return streetService.findNameByStreetId(street_id);
    }
}
