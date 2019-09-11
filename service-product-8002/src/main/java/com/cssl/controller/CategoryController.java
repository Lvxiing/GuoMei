package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.Category;
import com.cssl.entity.TreeCategory;
import com.cssl.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Controller
@RequestMapping("/category")
public class CategoryController {


    @Autowired
    private CategoryService categoryService;


    //查询所有顶级分类
    @RequestMapping("findParentCategory")
    @ResponseBody
    public List<Category> findParentCategory(@RequestParam("pid") Integer pid) {
        return categoryService.list(new QueryWrapper<Category>().eq("category_parent_id", pid));
    }

    //根据分类编号查询当前分类下的所有子分类
    @RequestMapping("findCategoryAndChild")
    @ResponseBody
    public List<TreeCategory> findCategoryAndChild(@RequestParam("parentId") Integer parentId) {
        //先查出以它为父类的子类
        List<Category> list = findParentCategory(parentId);
        //将数据进行递归
        return findChild(list, parentId);
    }

    //递归分类数据方法
    public List<TreeCategory> findChild(List<Category> byParentIds, Integer parentId) {
        List<TreeCategory> list = new ArrayList<>();
        //没有子类则退出递归
        if (byParentIds != null) {
            //遍历传递过来这一级别的数据  获取id  根据id查询下一级
            for (Category category : byParentIds) {
                //查出以此为父类的所有子类数据
                List<Category> byParentId = findParentCategory(category.getCid());
                //进行数据的封装
                TreeCategory treeCategory = new TreeCategory();
                treeCategory.setCid(category.getCid());
                treeCategory.setName(category.getName());
                treeCategory.setParentId(category.getParentId());
                treeCategory.setLevel(category.getLevel());
                //判断  如果这条数据的parentId与传递过来的parentId相等则添加进childList中
                if (category.getParentId() == parentId) {
                    //进行递归
                    treeCategory.setCategoryChildren(findChild(byParentId, category.getCid()));
                }
                //end
                list.add(treeCategory);
            }
            return list;
        }
        return list;
    }


}
