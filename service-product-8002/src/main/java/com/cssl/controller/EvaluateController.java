package com.cssl.controller;


import com.cssl.entity.Evaluate;
import com.cssl.entity.PageInfo;
import com.cssl.service.EvaluateService;
import com.github.pagehelper.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.HashMap;
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
@Controller
@RequestMapping("/evaluate")
public class EvaluateController {
    @Autowired
    private EvaluateService evaluateService;

    //根据用户查询评价商品信息(可以是未评价0 评价1)
    @RequestMapping("evaluateInfo")
    @ResponseBody
    public Object evaluateInfo(@RequestParam Map<String,Object> map,@RequestParam("pageIndex") Integer pageIndex,@RequestParam("pageSize") Integer pageSize){
        //判断是否分页
        if(pageIndex!=0&&pageSize!=0){
            PageInfo<Map<String, Object>>pages=new PageInfo<>();
            Page<Map<String, Object>> page =( Page<Map<String, Object>>) evaluateService.evaluateInfo(map, pageIndex, pageSize);
            pages.setList(page.getResult());
            pages.setPageNo(page.getPageNum());
            pages.setTotalCount((int)page.getTotal());
            pages.setPageSize(page.getPageSize());
            pages.setPageCount(page.getPages());
            return pages;
        }else{
            List<Map<String, Object>> list =(List<Map<String, Object>>) evaluateService.evaluateInfo(map, pageIndex, pageSize);
            return list;
        }

    }
    //追加评价
    @RequestMapping("addEvaluate")
    @ResponseBody
    public  boolean addEvaluate(@RequestParam Map<String,Object> map){
        Evaluate evaluate=new Evaluate();
        evaluate.setTime(new Date());
        evaluate.setStar(Integer.valueOf(map.get("evaluate_star").toString()));
        evaluate.setUserId(Integer.valueOf(map.get("user_id").toString()));
        evaluate.setContent(map.get("evaluate_content").toString());
        evaluate.setGoodsId(Integer.valueOf(map.get("goods_id").toString()));
        evaluate.setOid(Integer.valueOf(map.get("order_id").toString()));
        evaluate.setState(1);
        return evaluateService.save(evaluate);
    }
    //修改评价
    @RequestMapping("updateEvaluate")
    @ResponseBody
    public  boolean updateEvaluate(@RequestParam Map<String,Object> map){
        Evaluate evaluate=new Evaluate();
        evaluate.setId(Integer.valueOf(map.get("evaluate_id").toString()));
        evaluate.setState(1);
        evaluate.setTime(new Date());
        evaluate.setContent(map.get("evaluate_content").toString());
        evaluate.setStar(Integer.valueOf(map.get("evaluate_star").toString()));
        return evaluateService.updateById(evaluate);
    }
    @RequestMapping("evaluateFindAll")
    @ResponseBody
    public PageInfo<Map<String, Object>> evaluateFindAll(@RequestParam Map<String,Object> param, @RequestParam("page")int page, @RequestParam("limit")int limit){
        PageInfo<Map<String, Object>>pages=new PageInfo<>();
        Page<Map<String, Object>> maps = evaluateService.evaluateFindAll(param,page,limit);
        List<Map<String, Object>> result = maps.getResult();
        //封装查询数据
        pages.setList(result);
        //封装总记录数
        pages.setTotalCount((int)maps.getTotal());
        return pages;
    }

    @RequestMapping("goodsEvaluate")
    @ResponseBody
    public PageInfo<Map<String,Object>> goodsEvaluate(@RequestParam("gid") Integer gid,@RequestParam("pageIndex") Integer pageIndex,@RequestParam("pageSize") Integer pageSize){
        PageInfo<Map<String, Object>>pages=new PageInfo<>();
        Page<Map<String, Object>> page = evaluateService.goodsEvaluate(gid, pageIndex, pageSize);
        pages.setList(page.getResult());
        pages.setPageNo(page.getPageNum());
        pages.setTotalCount((int)page.getTotal());
        pages.setPageSize(page.getPageSize());
        pages.setPageCount(page.getPages());
        return  pages;
    }
}
