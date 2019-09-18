package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/evaluate")
@Controller
public class EvaluateController {


    @Autowired
    private ProductFeignInterface productFeignInterface;

    //查看订单详情购买商品信息
    @RequestMapping("/evaluateFindAll/{content}/{num}/{name}")
    @ResponseBody
    public Map<String,Object> evaluateFindAll(@PathVariable("num") String num, @PathVariable("name") String name, @PathVariable("content") String content, @RequestParam("page")int page, @RequestParam("limit")int limit){
        Map<String,Object> param = new HashMap<>();
        param.put("num",num);
        param.put("name",name);
        param.put("content",content);
        Map<String,Object> map = new HashMap<String,Object>();
        PageInfo<Map<String, Object>> mapPageInfo = productFeignInterface.evaluateFindAll(param,page,limit);
        map.put("code",0);
        map.put("msg", "");
        map.put("data",mapPageInfo.getList());
        map.put("count",mapPageInfo.getTotalCount());
        return map;
    }

    @RequestMapping("goodsEvaluate")
    @ResponseBody
    public PageInfo<Map<String,Object>> goodsEvaluate(@RequestParam("gid") Integer gid,@RequestParam("pageIndex") Integer pageIndex,@RequestParam("pageSize") Integer pageSize){

        return  productFeignInterface.goodsEvaluate(gid,pageIndex,pageSize);
    }

}
