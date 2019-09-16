package com.cssl.controller;

import com.cssl.entity.ImagesInfo;
import com.cssl.entity.News;
import com.cssl.entity.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.mongodb.core.query.Update;

import javax.swing.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

@RequestMapping("/news")
@RestController
public class NewsController {

    @Autowired
    private MongoTemplate mongoTemplate;

//===================前台模块=======================================

    //查询全部的新闻
    @RequestMapping("findAllNews")
    @ResponseBody
    public List<News> findAllNews() {
        List<News> newsList = mongoTemplate.findAll(News.class);
        return newsList;
    }

    @RequestMapping("findPageByTitle")
    @ResponseBody
    public PageInfo findPageByTitle(Integer pageIndex , Integer pageSize, String title){
        Query query = new Query();
        Criteria criteria = new Criteria();
        Pattern pattern = Pattern.compile("^.*" + title + ".*$", Pattern.CASE_INSENSITIVE);
        criteria.andOperator(Criteria.where("title").regex(pattern));
        if (title != null) {
            query.addCriteria(criteria);
        }
        query.with(new Sort(Sort.Direction.DESC, "subtime"));
        query.skip((pageIndex - 1) * pageSize);
        query.limit(pageSize);
        long count = mongoTemplate.count(query, News.class);
        PageInfo pi = new PageInfo();
        List<News> list = mongoTemplate.find(query,News.class);
        System.out.println(list);
        pi.setList(list);
        pi.setPageNo(pageIndex);
        pi.setPageSize(pageSize);
        pi.setTotalCount(Integer.parseInt(Long.toString(count)));
        return pi;
    }

//===================后台模块=======================================


    @RequestMapping("findByNewsPage")
    @ResponseBody
    public Map<String, Object> findAllByPage(@RequestParam("pageIndex") Integer pageIndex) {
        //不根据条件分页,显示所有数据后分页
        Query query = new Query();
        //排序
        Integer pageSize = 4;
        query.with(new Sort(Sort.Direction.DESC, "subtime"));
        query.skip((pageIndex - 1) * pageSize);
        query.limit(pageSize);
        long count = mongoTemplate.count(query, News.class);
        List<News> newsList = mongoTemplate.find(query, News.class);
        System.out.println(newsList);
        for (News n : newsList) {
            System.out.println(n);
        }
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("code", 0);
        result.put("msg", "");
        result.put("count", count);
        result.put("data", newsList);
        return result;
    }

    @RequestMapping("findByTitle/{title}")
    @ResponseBody
    public Map<String, Object> findByTitle(@PathVariable("title") String title) {
//            Query query = new Query(Criteria.where("title").is(title));
//            News news = newsService.findByTitle(query,News.class);
        News news = new News();
        Query query = new Query();
        Criteria criteria = new Criteria();
        Pattern pattern = Pattern.compile("^.*" + title + ".*$", Pattern.CASE_INSENSITIVE);
        criteria.andOperator(Criteria.where("title").regex(pattern));
        if (title != null) {
            query.addCriteria(criteria);
        }
        long count = mongoTemplate.count(query, News.class);
        List<News> newsList4 = mongoTemplate.find(query, News.class);
        System.out.println("根据名称查询数据:" + newsList4);
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("code", 0);
        result.put("msg", "");
        result.put("count", count);
        result.put("data", newsList4);
        return result;
    }

    //新增新闻
    @RequestMapping("savaNews")
    @ResponseBody
    public String save(@RequestBody News newsVo) {
        System.out.println("插入数据");
        News news = new News();
        news.setTitle(newsVo.getTitle());
        news.setSubtitle(newsVo.getSubtitle());//副标题
        news.setSubtime(newsVo.getSubtime());//MongoDB中时间字段是time,页面name应为subtime
        news.setContext(newsVo.getContext());//内容
        System.out.println("新闻标题:" + news.getTitle() + ",新闻时间:" + news.getSubtime());
//        Query query = new Query(Criteria.where("title").is(newsVo.getTitle()));
//        News news2 = mongoTemplate.findOne(query,News.class);
//        System.out.println("新闻标题2:"+news2.getTitle());
//
//        if (news2.getTitle().equals(news.getTitle())) {
//            System.out.println("数据已经存在,不能再重复提交");
//            return "{\"msg\":\"no\"}";
//        }else{
        mongoTemplate.insert(news);
        System.out.println("插入成功");
        return "{\"msg\":\"ok\"}";
        //}
    }

    //删除新闻
    @RequestMapping("deleteNews/{id}")
    @ResponseBody
    public String deleteNews(@PathVariable("id") String id) {
        Query query = new Query(Criteria.where("id").is(id));
        mongoTemplate.remove(query, News.class);
        return "{\"msg\":\"删除成功\"}";
    }

    //修改新闻
    @RequestMapping("updateNews")
    @ResponseBody
    public String updateNews(@RequestBody News news) {
        //根据id来查询数据
        Query query = new Query(Criteria.where("id").is(news.getId()));
        System.out.println("底层新闻标题:" + news.getTitle());
        Update update = new Update();
        update.set("title", news.getTitle());
        update.set("subtime", news.getSubtime());
        update.set("subtitle", news.getSubtitle());
        update.set("context", news.getContext());
        //更新查询返回结果集的第一条
        mongoTemplate.updateFirst(query, update, News.class);
        System.out.println("底层修改成功");
        //更新查询返回结果集的所有
        // mongoTemplate.updateMulti(query,update,Users.class);
        return "{\"msg\":\"ok\"}";
    }

    //根据id查询需要修改的数据
    @RequestMapping("findByUpdateId/{id}")
    @ResponseBody
    public Map<String, Object> findByUpdateId(@PathVariable("id") String id) {
        Map<String, Object> map = new HashMap<String, Object>();
        Query query = new Query(Criteria.where("id").is(id));
        News news = mongoTemplate.findOne(query, News.class);
        map.put("code", 0);
        map.put("msg", "");
        map.put("count", "");
        map.put("data", news);
        System.out.println("aslkdjasld:" + news);
        return map;
    }
}
