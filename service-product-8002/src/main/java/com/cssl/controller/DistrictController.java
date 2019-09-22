package com.cssl.controller;


import com.cssl.entity.District;
import com.cssl.service.DistrictService;
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
@RequestMapping("/district")
public class DistrictController {

    @Autowired
    private DistrictService districtService;

    @RequestMapping("findAreaByCity")
    @ResponseBody
    public List<District> findAreaByCity(@RequestParam Integer city_id){
        return districtService.findAreaByCity(city_id);
    }
    @RequestMapping("findNameByDistrictId")
    @ResponseBody
    public String findNameByDistrictId(@RequestParam Integer district_id){
        return districtService.findNameByDistrictId(district_id);
    }
}
