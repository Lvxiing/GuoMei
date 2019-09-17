package com.cssl.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Category;
import com.cssl.entity.PageInfo;
import com.cssl.entity.TreeCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("category")
public class CategoryController {

    @Autowired
    private ProductFeignInterface productFeignInterface;

    //--------------------------前台模块-------------------------------
    //查询所有顶级分类
    @RequestMapping("findParentCategory")
    @ResponseBody
    public List<Category> findParentCategory(@RequestParam("pid")Integer pid) {
        return productFeignInterface.findParentCategory(pid);
    }


    //根据分类编号查询当前分类下的所有子分类
    @RequestMapping("findCategoryAndChild")
    @ResponseBody
    public List<TreeCategory> findCategoryAndChild(@RequestParam("parentId") Integer parentId) {
        //先查出以它为父类的子类
        List<Category> list = findParentCategory(parentId);
        //将数据进行递归
        return productFeignInterface.findCategoryAndChild(parentId);
    }


    //根据商品编号查询该商品所在的分类以及全部父分类信息
    @RequestMapping("findCategoryByGoodsId")
    @ResponseBody
    public Map<String,Object> findCategoryByGoodsId(@RequestParam("gid") Integer gid) {

        return productFeignInterface.findCategoryByGoodsId(gid);
    }

    //查询父分类信息(反向递归)
    @RequestMapping("findCategoryParent")
    @ResponseBody
    public Map<String, Object> findCategoryParent(@RequestParam("cid") Integer cid){

        return productFeignInterface.findCategoryParent(cid);
    }



    //根据分类显示商品
    @RequestMapping("categoryGoodsShow")
    @ResponseBody
    public Map<String, Object> categoryGoodsShow(@RequestParam Map<String, Object> map) {

        return productFeignInterface.categoryGoodsShow(map);
    }


    //------------------------------后台模块--------------------------------
    //查询当前分类信息
    @RequestMapping("findParentOne")
    @ResponseBody
    public Category findParentOne(@RequestParam("id")Integer id){
        return productFeignInterface.findParentOne(id);
    }

    //查询当前品牌的父分类信息
    @RequestMapping("findBrandIsParentCategory")
    @ResponseBody
    public Map findBrandIsParentCategory(@RequestParam("cid")Integer cid){
        return productFeignInterface.findBrandIsParentCategory(cid);
    }


}
