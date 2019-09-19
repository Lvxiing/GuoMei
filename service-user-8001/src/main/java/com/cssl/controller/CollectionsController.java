package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.Collections;
import com.cssl.service.CollectionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
@RequestMapping("/collection")
public class CollectionsController {

    @Autowired
    private CollectionsService collectionsService;

    @RequestMapping("/saveCollection")
    public boolean  saveCollection(@RequestBody  Collections collections){
        return  collectionsService.save(collections);
    }

    @RequestMapping("/findIfCollected")
    public Collections  findIfCollected(@RequestParam Map map){
        return  collectionsService.getOne(new QueryWrapper<Collections>().eq("user_id",map.get("userId")).eq("goods_id",map.get("goodsId")));
    }



}
