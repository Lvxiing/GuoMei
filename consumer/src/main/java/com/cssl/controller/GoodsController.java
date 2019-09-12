package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.*;
import com.cssl.util.NginxUtil;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.*;

@Controller
@RequestMapping("/Goods")
public class GoodsController {

    @Autowired
    private ProductFeignInterface productFeignInterface;


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
            System.out.println("fileUrl = " + fileUrl);
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

    //新增商品
    @RequestMapping("addGoods")
    @ResponseBody
    public String addGoods(@RequestParam Map<String, Object> map) {

        return productFeignInterface.addGoods(map);
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


}
