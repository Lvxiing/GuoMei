package com.cssl.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Category;
import com.cssl.entity.TreeCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("category")
public class CategoryController {

    @Autowired
    private ProductFeignInterface productFeignInterface;

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

}
