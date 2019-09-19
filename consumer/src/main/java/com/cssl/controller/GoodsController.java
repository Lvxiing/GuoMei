package com.cssl.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.*;
import com.cssl.util.NginxUtil;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.*;

@Controller
@RequestMapping("/Goods")
public class GoodsController {

    @Autowired
    private ProductFeignInterface productFeignInterface;

    //--------------------------前台模块-------------------------------

    //根据分类名称查询该分类下的所有品牌商品的热卖商品
    @RequestMapping("findGoodsByCategoryName")
    @ResponseBody
    public List<Goods> findGoodsByCategoryName(@RequestParam("categoryName") String categoryName) {

        return productFeignInterface.findGoodsByCategoryName(categoryName);
    }

    //根据分类名称查询该分类下的所有品牌商品的新品抢先
    @RequestMapping("findGoodsNewByCategoryName")
    @ResponseBody
    public List<Goods> findGoodsNewByCategoryName(@RequestParam("categoryName") String categoryName) {

        return productFeignInterface.findGoodsNewByCategoryName(categoryName);
    }

    //根据分类名称查询该分类下的所有品牌商品的畅想低价
    @RequestMapping("findGoodsLowPrice")
    @ResponseBody
    public List<Goods> findGoodsLowPrice(@RequestParam("categoryName") String categoryName) {

        return productFeignInterface.findGoodsLowPrice(categoryName);
    }

    //根据当前第二级分类编号查询该分类下的所有第三级分类的热销榜
    @RequestMapping("findSaleByCategoryId")
    @ResponseBody
    public List<Map<String,Object>> findSaleByCategoryId(@RequestParam("cid")Integer cid){
        return productFeignInterface.findSaleByCategoryId(cid);
    }

    //根据当前一级分类编号查询该分类下的所有商品的热销榜
    @RequestMapping("findSaleAll")
    @ResponseBody
    public List<Map<String,Object>> findSaleAll(@RequestParam("cid")Integer cid){
        return productFeignInterface.findSaleAll(cid);
    }

    //查询商品详情信息
    @RequestMapping("GoodInfoShow")
    @ResponseBody
    public Map<String,Object> GoodInfoShow(HttpServletRequest request, HttpServletResponse response,@RequestParam("gid")Integer gid) throws Exception{
        Cookie cookie = null;
        String value = null;  //保存新的cookie中的值
        Cookie[] cookies = request.getCookies();
        if (cookies != null && cookies.length > 0) {
            for (Cookie cook : cookies) {
                if (cook.getName().equals("gid")) {
                    cookie = cook;
                    break;
                }
            }
        }
        boolean bs = true;
        if (cookie == null) {
            bs = false;
            cookie = new Cookie("gid", gid.toString());
        } else { //已存在
            String pId = cookie.getValue();
            String[] ids = pId.split("#");
            value = "";//先清空
            for (int i = 0; i < ids.length; i++) {
                if (!ids[i].equals(gid.toString())) {
                    value += ids[i] + "#";
                }
            }
            value = value.substring(0, value.length());
            value = gid.toString() + "#" + value;//叠加新的值
            String[] idss = value.split("#");
            if (idss.length > 10) {
                value = value.substring(0, value.lastIndexOf("#"));
            }
            cookie.setValue(value);

        }

        cookie.setMaxAge(60 * 60 * 24 * 7);
        response.addCookie(cookie);
        Map<String, Object> map = productFeignInterface.GoodInfoShow(gid);
        if(bs){
            List<Goods> goods = productFeignInterface.browseGoods(browseGoods(request, response));
            map.put("browseGoods", goods);
        }
        return map;
    }

    @ResponseBody
    @RequestMapping("findBrowseGoods")
    public List<Goods> findBrowseGoods(HttpServletRequest request, HttpServletResponse response){
         String s = browseGoods(request, response);
         return productFeignInterface.browseGoods(s);
    }

    //获取最近浏览商品的编号
    public String browseGoods(HttpServletRequest request, HttpServletResponse response){
        Cookie[] cookie = request.getCookies();
        String value = null;
        if (cookie != null) {
            for (Cookie c : cookie) {
                if (c.getName().equals("gid")) {
                    value = c.getValue();
                    break;
                }
            }
        }
        return value;
    }

    //首页的商品热销榜
    @RequestMapping("indexSaleGoods")
    @ResponseBody
    public List<Map<String,Object>> indexSaleGoods(){
        return productFeignInterface.indexSaleGoods();
    }

    //商品详情的热销榜
    @RequestMapping("goodsInfoSale")
    @ResponseBody
    public List<Goods> goodsInfoSale(@RequestParam("cid") Integer cid){
        return productFeignInterface.goodsInfoSale(cid);
    }

    //会员商品
    @RequestMapping("vipGoodsFindAllQian")
    @ResponseBody
    public PageInfo<Map<String, Object>> vipGoodsFindAllQian(@RequestParam Map<String, Object> map) {

        return productFeignInterface.vipGoodsFindAllQian(map);
    }



    //--------------------------后台模块-------------------------------
    @RequestMapping("findGoods")
    @ResponseBody
    public Map<String, Object> findGoods(@RequestParam Map<String, Object> param) {
        Map<String, Object> map = new HashMap<>();
        PageInfo<Map<String, Object>> goods = productFeignInterface.findGoods(param);
        map.put("code", 0);
        map.put("data", goods.getList());
        map.put("totalCount", goods.getTotalCount());
        return map;
    }

    //上传商品图片
    @RequestMapping("UploadPhoto")
    @ResponseBody
    public Map<String, Object> UploadPhoto(MultipartFile file, HttpServletRequest request) {
        Map<String, Object> res = new HashMap<>();
        //服务器上存放图片的文件夹路径
        String path = "product/goods";
        try {
            //类型转换
            String fileName = file.getOriginalFilename();  //获取文件名
            String prefix = fileName.substring(fileName.lastIndexOf("."));     // 获取文件后缀
            File excelFile = File.createTempFile(fileName, prefix);
            file.transferTo(excelFile);

            //建立ftp连接
            NginxUtil.connect(path);
            //上传文件,返回随机生成的不唯一文件名
            String uploadName = NginxUtil.upload(excelFile);
            //返回服务器上存放图片的完整路径
            String fileUrl = NginxUtil.getFileUrl(path, uploadName);
            res.put("url", fileUrl);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    @RequestMapping("findGrade")
    @ResponseBody
    public List<Grade> findGrade() {
        return productFeignInterface.findGrade();
    }


    @RequestMapping("findGradeById")
    @ResponseBody
    public Grade findGradeById(@RequestParam("id") Integer id){
        return productFeignInterface.findGradeById(id);
    }

    @RequestMapping("updateGradeMoney")
    @ResponseBody
    public String updateGradeMoney(@RequestParam("id") Integer id,@RequestParam("money") double money){
       return productFeignInterface.updateGradeMoney(id,money);
    }


    //新增商品
    @RequestMapping("addGoods")
    @ResponseBody
    public String addGoods(@RequestParam Map<String, Object> map) {

        return productFeignInterface.addGoods(map);
    }

    //修改商品
    @RequestMapping("modifyGoods")
    @ResponseBody
    public String modifyGoods(@RequestParam Map<String, Object> map) {
        return productFeignInterface.modifyGoods(map);
    }

    //上架或下架商品
    @RequestMapping("upStateGoods")
    @ResponseBody
    public String upStateGoods(@RequestParam Map<String, Object> map) {

        return productFeignInterface.upStateGoods(map);
    }

    @RequestMapping("findCategory")
    @ResponseBody
    public String findCategory() {
        String json = "{\"data\":" + productFeignInterface.findCategory() + "}";
        return json;
    }

    @RequestMapping("updateCategoryInfo/{cid}/{parentId}")
    @ResponseBody
    public String updateCategoryInfo(@PathVariable("cid") Integer cid, @PathVariable("parentId") Integer parentId) {
        return productFeignInterface.updateCategoryInfo(cid, parentId);
    }

    @RequestMapping("updateCategory")
    @ResponseBody
    public String updateCategory(@RequestParam Map<String, String> request) {
        //用于封装数据
        Category category = new Category();
        category.setCid(Integer.valueOf(request.get("cid")));
        category.setName(request.get("categoryName"));
        category.setParentId(Integer.valueOf(request.get("categoryList")));
        String json = "{\"res\":" + productFeignInterface.updateCategory(category) + "}";
        return json;

    }

    @RequestMapping("deleteCategory/{cid}")
    @ResponseBody
    public String deleteCategory(@PathVariable("cid") Integer cid) {
        String json = productFeignInterface.deleteCategory(cid);
        return json;
    }

    @RequestMapping("brandExistGood/{cid}")
    @ResponseBody
    public String brandExistGood(@PathVariable("cid") Integer cid) {
        String json = productFeignInterface.brandExistGood(cid);
        return json;
    }

    @RequestMapping("findTreeCategory/{cLevel}")
    @ResponseBody
    public String findTreeCategory(@PathVariable("cLevel") Integer cLevel) {
        return productFeignInterface.findTreeCategory(cLevel);
    }

    @RequestMapping("addCategory")
    @ResponseBody
    public String addCategory(@RequestParam Map<String, String> map) {
        Category category = new Category();
        category.setName(map.get("parentName") + ":" + map.get("categoryName"));
        return productFeignInterface.addCategory(category);
    }

    @RequestMapping("categoryShow")
    @ResponseBody
    public List<Category> categoryShow(@RequestParam Map<String, String> param) {
        return productFeignInterface.categoryShow(param);
    }

    @RequestMapping("findGoodsById")
    @ResponseBody
    public Map findGoodsById(@RequestParam("id") Integer id) {
        return productFeignInterface.findGoodsById(id);
    }

    //会员商品
    @RequestMapping("/vipGoodsFindAll/{cname}/{title}")
    @ResponseBody
    public Map<String,Object> vipGoodsFindAll(@PathVariable("cname") String cname, @PathVariable("title") String title, @RequestParam("page")int page, @RequestParam("limit")int limit){
        Map<String,Object> param = new HashMap<>();
        param.put("cname",cname);
        param.put("title",title);
        Map<String,Object> map = new HashMap<String,Object>();
        PageInfo<Map<String, Object>> mapPageInfo = productFeignInterface.vipGoodsFindAll(param,page,limit);
        map.put("code",0);
        map.put("msg", "");
        map.put("data",mapPageInfo.getList());
        map.put("count",mapPageInfo.getTotalCount());
        return map;
    }
}
