package com.cssl.controller;


import com.cssl.entity.City;
import com.cssl.service.CityService;
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
@RequestMapping("/city")
public class CityController {

    @Autowired
    private CityService cityService;

    @RequestMapping("findCityByProvince")
    @ResponseBody
    public List<City> findCityByProvince(@RequestParam Integer province_id){
        return cityService.findCityByProvince(province_id);
    }

    @RequestMapping("findNameByCityId")
    @ResponseBody
    public String findNameByCityId(@RequestParam Integer city_id){
        return cityService.findNameByCityId(city_id);
    }
}
