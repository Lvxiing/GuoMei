package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private ProductFeignInterface productFeignInterface;


    //商品新闻模块
    //查询所有新闻
    @RequestMapping("findAllNews")
    @ResponseBody
    public List<News> findAllNews(){
        return productFeignInterface.findAllNews();
    }

    @RequestMapping("findByTitlePage")
    @ResponseBody
    public List<News> findByTitlePage(@RequestParam("pageIndex") Integer pageIndex , @RequestParam("title") String title){
        if(pageIndex !=null){
            pageIndex =1;
        }
        Integer pageSize = 8;
        System.out.println("标题:"+title);
        System.out.println(productFeignInterface.findPageByTitle(pageIndex,pageSize,title).getList());
        return productFeignInterface.findPageByTitle(pageIndex,pageSize,title).getList();
    }

}
