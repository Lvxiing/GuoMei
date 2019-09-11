package com.cssl.controller;

import com.cssl.entity.ImagesInfo;
import com.cssl.entity.News;
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



}
