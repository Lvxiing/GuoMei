package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

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

    @RequestMapping("findByNewsId")
    @ResponseBody
    public List<News> findByNewsId(@RequestParam("id") String id){
        System.out.println("asdasdasdasdsad:"+id);
        System.out.println(productFeignInterface.findByNewsId(id));
        return productFeignInterface.findByNewsId(id);
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
    //-----------------------后台新闻管理模块---------------------------
    //新闻查询
    @RequestMapping("findByNewsPage")
    @ResponseBody
    public Map<String, Object> findAllNews(@RequestParam("pageIndex") Integer pageIndex) {
        System.out.println(productFeignInterface.findAllNews(pageIndex));
        return productFeignInterface.findAllNews(pageIndex);
    }

    //根据名称模糊查询
    @RequestMapping("findByTitle/{title}")
    @ResponseBody
    public Map<String, Object> findByTitle(@PathVariable("title") String title) {
        System.out.println("新闻标题:"+title);
        return productFeignInterface.findByTitle(title);

    }

    //新增数据
    @RequestMapping("savaNews")
    @ResponseBody
    public String save(String title,String subtitle, String context,String subtime) {
        News newsVo = new News();
        newsVo.setTitle(title);
        newsVo.setSubtitle(subtitle);
        newsVo.setContext(context);
        newsVo.setSubtime(subtime);
        System.out.println("新闻名称:t"+title);
        System.out.println("asdasdasd:"+productFeignInterface.save(newsVo));
        return productFeignInterface.save(newsVo);

    }

    //删除新闻
    @RequestMapping("deleteNews/{id}")
    @ResponseBody
    String deleteNews(@PathVariable("id") String id) {
        return productFeignInterface.deleteNews(id);
    }

    //修改新闻数据
    @RequestMapping("updateNews")
    @ResponseBody
    String updateNews(String id,String title,String subtitle, String context,String subtime) {
        News news = new News();
        news.setId(id);
        news.setTitle(title);
        news.setSubtime(subtime);
        news.setSubtitle(subtitle);
        news.setContext(context);
        System.out.println("新闻标题asdasdasd:"+title);
        System.out.println("ddddddddddddddddddddd:"+productFeignInterface.updateNews(news));
        return productFeignInterface.updateNews(news);
    }

    //根据id查询需要修改的数据
    @RequestMapping("findByUpdateId/{id}")
    @ResponseBody
    Map<String, Object> findByUpdateId(@PathVariable("id") String id) {
        System.out.println("id:"+id);
        System.out.println(productFeignInterface.findByUpdateId(id));
        return productFeignInterface.findByUpdateId(id);
    }
}
