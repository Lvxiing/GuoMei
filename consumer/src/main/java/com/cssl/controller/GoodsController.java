package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.Category;
import com.cssl.entity.ImagesInfo;
import com.cssl.entity.News;
import com.cssl.entity.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.*;

@Controller
@RequestMapping("/goods")
public class GoodsController {

    @Autowired
    private ProductFeignInterface productFeignInterface;



    //--------------------------后台模块-------------------------------
    @RequestMapping("findGoods")
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
    public String addGoods(@RequestParam Map<String,Object> map){

        return productFeignInterface.addGoods(map);
    }

    //上架或下架商品
    @RequestMapping("upStateGoods")
    public String upStateGoods(@RequestParam Map<String,Object> map){

        return productFeignInterface.upStateGoods(map);
    }



}
