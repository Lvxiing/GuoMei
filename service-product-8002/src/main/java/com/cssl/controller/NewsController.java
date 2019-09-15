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


}
