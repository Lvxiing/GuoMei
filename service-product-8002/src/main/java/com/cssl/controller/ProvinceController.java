package com.cssl.controller;


import com.cssl.entity.Province;
import com.cssl.service.ProvinceService;
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
@RequestMapping("/province")
public class ProvinceController {

    @Autowired
    private ProvinceService provinceService;

    @RequestMapping("findProvince")
    @ResponseBody
    public List<Province> findProVince(){
        return provinceService.findProvince();
    }
    @RequestMapping("findNameByProvinceId")
    @ResponseBody
    public String findNameByProvinceId(@RequestParam Integer province_id){
        return provinceService.findNameByProvinceId(province_id);
    }
}
