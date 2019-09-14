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




    //--------------------------后台模块----------------------------------
    //--------------------------商品分类模块-------------------------------
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

    //根据id查询当前分类
    @RequestMapping("category/findParentOne")
    Category findParentOne(@RequestParam("id")Integer id);

    //查询当前品牌的父分类信息
    @RequestMapping("category/findBrandIsParentCategory")
    Map findBrandIsParentCategory(@RequestParam("id")Integer id);


    //--------------------------商品模块-------------------------------
    //查询商品
    @RequestMapping("goods/findGoods")
    PageInfo<Map<String, Object>> findGoods(@RequestParam Map<String,Object> param);

    //新增商品
    @RequestMapping("goods/addGoods")
    String addGoods(@RequestParam Map<String,Object> map);

    //修改商品状态
    @RequestMapping("goods/upStateGoods")
    String upStateGoods(@RequestParam Map<String,Object> map);

    //查询所有会员等级
    @RequestMapping("grade/findAll")
    List<Grade> findGrade();

    //修改商品信息
    @RequestMapping("goods/modifyGoods")
    String modifyGoods(@RequestParam Map<String, Object> map);

    //---------------------------订单后台模块--------------------------------
    //查询全部和模糊查询
    @RequestMapping("/orders/orderList/{pageIndex}/{pageSize}/{orderNo}/{name}")
    PageInfo<Map<String, Object>> orderList(@PathVariable("pageIndex")Integer pageIndex, @PathVariable("pageSize")Integer pageSize, @PathVariable("orderNo")String orderNo, @PathVariable("name")String name);
    //根据订单号查询
    @RequestMapping("/orders/ByIdOrders/{orderNo}")
    List<Map<String,Object>> ByIdOrders(@PathVariable("orderNo")String orderNo);
    //根据订单号修改
    @RequestMapping("/orders/updateStatus")
    int updateStatus(@RequestParam("orderNo") String orderNo, @RequestParam("status") int status);
    //删除
    @RequestMapping("/orders/deleteOrders")
    int deleteOrders(@RequestParam("orderId")Integer orderId);
    //计算本月退单数量,订单数量和金额,本月订单实际金额,本月未付款金额
    @RequestMapping("/orders/inquiryAmount")
    Map<String,Object> inquiryAmount();
    //查询最近一周的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/orders/weekInquiryAmount")
    Map<String,Object> weekInquiryAmount();
    //查询最近一周对应日期的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/orders/weekOrder")
    List<Map<String,Object>> weekOrder();

    @RequestMapping("goods/findGoodsById")
    Map findGoodsById(@RequestParam("id") Integer id);

}
