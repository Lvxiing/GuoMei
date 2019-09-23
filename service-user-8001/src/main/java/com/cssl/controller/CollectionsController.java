package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.Collections;
import com.cssl.entity.PageInfo;
import com.cssl.entity.Users;
import com.cssl.service.CollectionsService;
import com.github.pagehelper.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
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

    @RequestMapping("/collectionFenYe/{userId}/{pageIndex}/{pageSize}")
    public PageInfo<Map> collectionFenYe(@PathVariable("userId") Integer userId,@PathVariable("pageIndex") int pageIndex,@PathVariable("pageSize") int pageSize) {
        Page<Map> pageMap = collectionsService.collectionFenYe(userId, pageIndex, pageSize);
        PageInfo<Map> page=new PageInfo<>();
        page.setList(pageMap.getResult());
        page.setTotalCount((int)pageMap.getTotal());
        page.setPageNo(pageMap.getPageNum());
        page.setPageSize(pageMap.getPageSize());
        page.setPageCount(pageMap.getPages());
        return   page;
    }

    @RequestMapping("/delCollection/{collectionId}")
    public boolean  delCollection(@PathVariable("collectionId") Integer collectionId){
       return  collectionsService.remove(new QueryWrapper<Collections>().eq("collection_id",collectionId));
    }



}
