package com.cssl.controller;


import com.cssl.entity.Grade;
import com.cssl.service.GradeService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
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
@RequestMapping("/grade")
public class GradeController {

    @Autowired
    private GradeService gradeService;

    @RequestMapping("findAll")
    @ResponseBody
    public List<Grade> findAll(){
        return gradeService.list();
    }
}
