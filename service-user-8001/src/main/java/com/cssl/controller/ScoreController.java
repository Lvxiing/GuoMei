package com.cssl.controller;


import com.cssl.entity.Growup;
import com.cssl.entity.Score;
import com.cssl.entity.ScoreType;
import com.cssl.service.ScoreService;
import com.cssl.service.Score_typeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Controller
@RequestMapping("/score")
public class ScoreController {
    @Autowired
    private ScoreService scoreService;
    @Autowired
    private Score_typeService score_typeService;

    @RequestMapping("/updateScoreSum")
    @ResponseBody
    public int updateScoreSum(@RequestParam Map map)
    {
        //判断数据库里有没有该用户的相关记录
         Integer uid=Integer.valueOf(map.get("userId").toString());
         Map<String,Object>maps=new HashMap<String,Object>();
         maps.put("user_id",uid);
        if(scoreService.listByMap(maps).size()!=0){
            return  scoreService.updateScoreSum(map);
        }else{
            Map<String,Object>map1=new HashMap<String,Object>();
            Score scores=new Score();
            scores.setUserId(uid);
            //查询相关积分值
            final  String scoreType_name="文字评价";
            map1.put("scoreType_name",scoreType_name);
            Collection<ScoreType> collection = score_typeService.listByMap(map1);
            Iterator iterator = collection.iterator();
            ScoreType scoreType=null;
            while(iterator.hasNext()){
                scoreType=(ScoreType)iterator.next();
            }
            scores.setScores(scoreType.getValue());
            return   scoreService.save(scores)?1:0;
        }

    }
}
