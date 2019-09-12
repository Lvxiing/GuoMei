package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Category;
import com.cssl.entity.ImagesInfo;
import com.cssl.entity.News;
import com.cssl.entity.PageInfo;
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
        PageInfo<Map<String, Object>> goods =productFeignInterface.findGoods(param) ;
        map.put("code", 0);
        map.put("data", goods.getList());
        map.put("totalCount", goods.getTotalCount());
        return map;
    }

    //上传商品图片
    @RequestMapping("UploadPhoto")
    @ResponseBody
    public Map<String, Object> UploadPhoto(MultipartFile file, HttpServletRequest request) throws IOException {
        //图片存入路径
        String path = "D:/Nignx4FileServer/nginx-1.14.2/html/images";
        Map<String, Object> res = new HashMap<>();
        List<String> fileTyps = Arrays.asList("image/jpeg", "image/png", "image/gif");
        if (!file.isEmpty()) {    //传过来的文件不为空
            String uuid = UUID.randomUUID().toString();   //保证每个的文件名不重复
            //源文件名
            String originalFilename = uuid + file.getOriginalFilename();
            //文件的真实类型
            String contentType = file.getContentType();
            if (fileTyps.contains(contentType)) {
                File f = new File(path, originalFilename);
                if (!f.getParentFile().exists()) {
                    f.getParentFile().mkdir();
                }
                //写入指定盘符
                file.transferTo(f);
            }

            //返回图片url
            res.put("url", "http://127.0.0.1:88/upload/" + originalFilename);
        }
        return res;
    }

    //新增商品
    @RequestMapping("addGoods")
    @ResponseBody
    public String addGoods(@RequestParam Map<String,Object> map){

        return productFeignInterface.addGoods(map);
    }

    //上架或下架商品
    @RequestMapping("upStateGoods")
    @ResponseBody
    public String upStateGoods(@RequestParam Map<String,Object> map){

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
    public List<Category> categoryShow(@RequestParam Map<String, String> param){
        return productFeignInterface.categoryShow(param);
    }






}
