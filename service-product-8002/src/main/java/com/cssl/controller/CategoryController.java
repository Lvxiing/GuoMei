package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.Brand;
import com.cssl.entity.Category;
import com.cssl.entity.TreeCategory;
import com.cssl.service.BrandService;
import com.cssl.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import java.util.*;

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

    @Autowired
    private BrandService brandService;

    //--------------------------前台模块-------------------------------

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

    //递归分类数据方法(找子分类)
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
                treeCategory.setCLevel(category.getCLevel());
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

    //根据商品编号查询该商品所在的分类以及全部父分类信息
    @RequestMapping("findCategoryByGoodsId")
    @ResponseBody
    public Map<String, Object> findCategoryByGoodsId(@RequestParam("gid") Integer gid) {
        Category category = categoryService.findCategoryByGoodsId(gid);
        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("cid", category.getCid());
        paramMap.put("cname", category.getName());
        return getAllParentInfo(paramMap);
    }

    //查询父分类信息(反向递归)
    @RequestMapping("findCategoryParent")
    @ResponseBody
    public Map<String, Object> findCategoryParent(@RequestParam("cid") Integer cid){
        Category category = categoryService.getOne(new QueryWrapper<Category>().eq("category_id",cid));
        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("cid", cid);
        paramMap.put("cname", category.getName());
        return getAllParentInfo(paramMap);
    }


    /**
     * 根据指定末级分类id反向递归查询
     *
     * @param paramMap 末级分类参数
     * @return 返回分类名称，分类id
     */
    public Map<String, Object> getAllParentInfo(Map<String, Object> paramMap) {
        String catId = paramMap.get("cid").toString();
        String catName = (String) paramMap.get("cname");
        try {
            //根据分类id查询分类信息
            Category goodsCate = categoryService.getOne(new QueryWrapper<Category>().eq("category_id", catId));
            //父级分类id
            Integer catParentId = goodsCate.getParentId();
            if (goodsCate != null && catParentId != 0) {//注意Long值比较
                //父级分类名称
                Category pCategory = categoryService.getOne(new QueryWrapper<Category>().eq("category_id", catParentId));
                String catParentName = pCategory.getName();
                //拼接所有分类名称,和分类编号
                catName = catParentName + ">" + catName;
                catId = pCategory.getCid() + ">" + catId;
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("cname", catName);
                map.put("cid", catId);
                return getAllParentInfo(map);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return paramMap;
    }


    //--------------------------后台模块-------------------------------
    //查询所有分类
    @RequestMapping("findCategory")
    @ResponseBody
    public List<Map<String, Object>> findCategory() {

        return categoryService.findCategoryAndParentExist();
    }

    @RequestMapping("updateCategoryInfo/{cid}/{parentId}")
    @ResponseBody
    public Map<String, Object> updateCategoryInfo(@PathVariable("cid") Integer cid, @PathVariable("parentId") Integer parentId) {
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> param = new HashMap<>();//调用dao的参数
        //查询当前分类相关信息
        param.put("cid", cid);
        List<Category> myCategory = categoryService.findCategory(param);
        map.put("myCategory", myCategory.get(0));
        //查询当前分类是否有父分类
        Category category = categoryService.findCategoryParent(parentId);
        if (category != null) {
            param.remove("cid");//清空
            map.put("parentCategory", category);
            param.put("level", category.getCLevel());
            //查询父分类同级别的分类信息
            List<Category> parentBrother = categoryService.findCategory(param);
            map.put("parentBrother", parentBrother);
        } else
            map.put("flag", "myRoot");
        return map;
    }

    @PostMapping("updateCategory")
    @ResponseBody
    public String updateCategory(@RequestBody Category category) {
        int result = categoryService.updateCategoryInfo(category);
        if (result > 0) {
            String json = "{\"code\":\"success\"}";
            return json;
        }

        return "{\"msg\":\"更新失败\"}";
    }

    @RequestMapping("deleteCategory/{cid}")
    @ResponseBody
    public String deleteCategory(@PathVariable("cid") Integer cid) {
        int result = categoryService.deleteCategory(cid);
        if (result > 0) {
            String json = "{\"code\":\"success\"}";
            return json;
        }
        return "{\"msg\":\"删除失败\"}";
    }

    @RequestMapping("brandExistGood/{cid}")
    @ResponseBody
    public String brandExistGood(@PathVariable("cid") Integer cid) {
        int result = categoryService.brandExistGood(cid);
        String json;
        if (result > 0) {
            json = "{\"code\":\"exists\"}";
            return json;
        } else { //没有商品,可以删除
            int res = deleteBrand(cid);
            return "{\"code\":\"delBrand\"}";
        }

    }

    public int deleteBrand(Integer cid) {
        return categoryService.deleteBrand(cid);
    }

    @RequestMapping("findTreeCategory/{cLevel}")
    @ResponseBody
    public List<Map<String, Object>> findTreeCategory(@PathVariable("cLevel") Integer cLevel) {
        List<Map<String, Object>> list = categoryService.findTreeCategory(cLevel);
        if (cLevel != 5) {
            Map<String, Object> map = new HashMap<>();
            map.put("name", "根栏目");
            map.put("pid", "0");
            map.put("id", "-1");
            list.add(map);
        }
        return list;
    }

    @RequestMapping("addCategory")
    @ResponseBody
    public String addCategory(@RequestBody Category category) {
        String[] name = category.getName().split(":");
        String parentName = name[0];
        String newName = name[1];
        boolean flag = false;
        Category category2 = new Category();
        if ("根栏目".equals(parentName)) {
            category2.setName(newName);
            category2.setParentId(0);
            category2.setCLevel(1);
            int result = categoryService.addCategory(category2);
            flag = true;
        } else {
            Map<String, Object> param = new HashMap<>();
            param.put("name", parentName);
            List<Category> parentBrother = categoryService.findCategory(param);
            Category existCategory = categoryService.getOne(new QueryWrapper<Category>().eq("category_parent_id", parentBrother.get(0).getCid()).eq("category_name", newName));
            if (parentBrother.get(0) != null && existCategory == null) {
                category2.setName(newName);
                category2.setParentId(parentBrother.get(0).getCid());
                category2.setCLevel(parentBrother.get(0).getCLevel() + 1);
                int result = categoryService.addCategory(category2);
                flag = true;
                if (category2.getCLevel() == 4) {
                    brandService.save(new Brand().setBname(category2.getName()).setCid(category2.getCid()));
                }
            }
        }
        if (flag) {
            return "{\"code\":\"success\"}";
        }
        return "{\"code\":\"error\"}";
    }


    @RequestMapping("categoryShow")
    @ResponseBody
    public List<Category> categoryShow(@RequestParam Map<String, String> param) {
        Map<String, Object> map = new HashMap<>();

        if (param.get("level") != null) {
            map.put("level", param.get("level"));
        }
        if (param.get("parentId") != null) {
            map.put("parentId", param.get("parentId"));
        }
        if (param.get("cid") != null) {
            map.put("cid", param.get("cid"));
        }
        List<Category> category = categoryService.findCategory(map);
        return category;
    }

    //查询当前分类的上一级父分类
    @RequestMapping("findParentOne")
    @ResponseBody
    public Category findParentOne(@RequestParam("id") Integer id) {
        return categoryService.getOne(new QueryWrapper<Category>().eq("category_id", id));
    }

    //查询当前品牌的父分类信息
    @RequestMapping("findBrandIsParentCategory")
    @ResponseBody
    public Map findBrandIsParentCategory(@RequestParam("id") Integer id) {
        return categoryService.findBrandIsParentCategory(id);
    }


}
