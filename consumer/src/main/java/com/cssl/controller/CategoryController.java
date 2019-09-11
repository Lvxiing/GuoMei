package com.cssl.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Category;
import com.cssl.entity.TreeCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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



    //--------------------------后台模块-------------------------------
    @RequestMapping("Goods/findCategory")
    public String findCategory() {
        String json = "{\"data\":" + productFeignInterface.findCategory() + "}";
        return json;
    }

    @RequestMapping("Goods/updateCategoryInfo/{cid}/{parentId}")
    public String updateCategoryInfo(@PathVariable("cid") Integer cid, @PathVariable("parentId") Integer parentId) {
        return productFeignInterface.updateCategoryInfo(cid, parentId);
    }

    @RequestMapping("Goods/updateCategory")
    public String updateCategory(@RequestParam Map<String, String> request) {
        //用于封装数据
        Category category = new Category();
        category.setCid(Integer.valueOf(request.get("cid")));
        category.setName(request.get("categoryName"));
        category.setParentId(Integer.valueOf(request.get("categoryList")));
        String json = "{\"res\":" + productFeignInterface.updateCategory(category) + "}";
        return json;

    }

    @RequestMapping("Goods/deleteCategory/{cid}")
    public String deleteCategory(@PathVariable("cid") Integer cid) {
        String json = productFeignInterface.deleteCategory(cid);
        return json;
    }

    @RequestMapping("Goods/brandExistGood/{cid}")
    public String brandExistGood(@PathVariable("cid") Integer cid) {
        String json = productFeignInterface.brandExistGood(cid);
        return json;
    }

    @RequestMapping("Goods/findTreeCategory/{cLevel}")
    public String findTreeCategory(@PathVariable("cLevel") Integer cLevel) {
        return productFeignInterface.findTreeCategory(cLevel);
    }

    @RequestMapping("Goods/addCategory")
    public String addCategory(@RequestParam Map<String, String> map) {
        Category category = new Category();
        category.setName(map.get("parentName") + ":" + map.get("categoryName"));
        return productFeignInterface.addCategory(category);
    }

    @RequestMapping("Goods/categoryShow")
    public List<Category> categoryShow(@RequestParam Map<String, String> param){
        return productFeignInterface.categoryShow(param);
    }




}
