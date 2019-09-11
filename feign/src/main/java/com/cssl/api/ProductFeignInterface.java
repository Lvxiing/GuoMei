package com.cssl.api;

import com.cssl.entity.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@FeignClient("service-product")
public interface ProductFeignInterface {

    //--------------------------前台模块-------------------------------

    //首页显示
    //首页大轮播图
    @RequestMapping("index/mainImagesData")
    public List<ImagesInfo> mainImagesData();

    //新闻模块
    //查询所有新闻
    @RequestMapping("news/findAllNews")
    List<News> findAllNews();

    //查询所有顶级分类
    @RequestMapping("category/findParentCategory")
    List<Category> findParentCategory(@RequestParam("pid") Integer pid);

    //根据分类编号查询当前分类下的所有子分类
    @RequestMapping("category/findCategoryAndChild")
    List<TreeCategory> findCategoryAndChild(@RequestParam("parentId") Integer parentId);




    //--------------------------后台模块-------------------------------
    //商品分类模块
    //查询所有分类
    @RequestMapping("category/findCategory")
    String findCategory();

    //返回当前进行更新的分类信息
    @RequestMapping("category/updateCategoryInfo/{cid}/{parentId}")
    String updateCategoryInfo(@PathVariable("cid")Integer cid,@PathVariable("parentId") Integer parentId);

    //更新分类
    @RequestMapping("category/updateCategory")
    String updateCategory(Category category);

    //删除分类
    @RequestMapping("category/deleteCategory/{cid}")
    String deleteCategory(@PathVariable("cid") Integer cid);

    //查询当前品牌下是否有商品
    @RequestMapping("category/brandExistGood/{cid}")
    String brandExistGood(@PathVariable("cid")Integer cid);

    //返回树状图数据的分类
    @RequestMapping("category/findTreeCategory/{cLevel}")
    String findTreeCategory(@PathVariable("cLevel")Integer cLevel);

    //添加分类
    @RequestMapping("category/addCategory")
    String addCategory(Category category);

    //根据不同条件返回分类信息
    @RequestMapping("category/categoryShow")
    List<Category> categoryShow(@RequestParam Map<String, String> param);

    //商品模块
    //查询商品
    @RequestMapping("category/findGoods")
    PageInfo<Map<String, Object>> findGoods(@RequestParam Map<String,Object> param);

    //新增商品
    @RequestMapping("category/addGoods")
    String addGoods(@RequestParam Map<String,Object> map);

    //修改商品状态
    @RequestMapping("category/upStateGoods")
    String upStateGoods(@RequestParam Map<String,Object> map);

}
