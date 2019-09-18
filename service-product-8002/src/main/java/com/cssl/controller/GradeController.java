package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.Grade;
import com.cssl.service.GradeService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigDecimal;
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

    @RequestMapping("findGradeById")
    @ResponseBody
    public Grade findGradeById(@RequestParam("id") Integer id){
        return gradeService.getOne(new QueryWrapper<Grade>().eq("grade_id",id));
    }

    @RequestMapping("updateGradeMoney")
    @ResponseBody
    public String updateGradeMoney(@RequestParam("id") Integer id,@RequestParam("money") double money){
        Grade grade = new Grade();
        grade.setId(id);
        grade.setMoney(BigDecimal.valueOf(money));
        boolean res = gradeService.updateById(grade);
        if (res) {
            String json = "{\"code\":\"success\"}";
            return json;
        }
        return "{\"msg\":\"修改失败\"}";
    }
}
