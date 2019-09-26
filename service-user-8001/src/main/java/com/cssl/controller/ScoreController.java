package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.cssl.entity.Growup;
import com.cssl.entity.Score;
import com.cssl.entity.ScoreType;
import com.cssl.service.ScoreService;
import com.cssl.service.Score_typeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import java.math.BigDecimal;
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
@RestController
@RequestMapping("/score")
public class ScoreController {
    @Autowired
    private ScoreService scoreService;
    @Autowired
    private Score_typeService score_typeService;

    @RequestMapping("/updateScoreSum")
    public int updateScoreSum(@RequestParam Map map)
    {
        //判断数据库里有没有该用户的相关记录
         Integer uid=Integer.valueOf(map.get("userId").toString());
         Map<String,Object>maps=new HashMap<String,Object>();
         maps.put("user_id",uid);
        //获取传来的类型
        final  String scoreType_name=map.get("typeName").toString();
        //根据用户id查询积分表中是否有数据
       Collection<Score> scores1 = scoreService.listByMap(maps);
        //根据类型编号查询相对于的积分值
        Map<String,Object>map1=new HashMap<String,Object>();
        map1.put("scoreType_name",scoreType_name);
        Collection<ScoreType> collection = score_typeService.listByMap(map1);
        Iterator iterator = collection.iterator();
        ScoreType scoreType=null;
        while(iterator.hasNext()){
            scoreType=(ScoreType)iterator.next();
        }
        if(scores1.size()!=0){       //有数据修改
            if(scoreType_name.equals("购物")){
                Double money = new Double(map.get("money").toString());
                BigDecimal big = new BigDecimal(Double.valueOf(scoreType.getValue().toString()));
                //计算购物积分值
                double score=Math.ceil(money*big.setScale(1,BigDecimal.ROUND_HALF_UP).doubleValue());
                Map<String,Object>update=new HashMap<String,Object>();
                update.put("userId",uid);
                update.put("score_sum",score);
                return  scoreService.updateCartScoreSum(update);
            }else{
                return  scoreService.updateScoreSum(map);
            }

        }else{//没有数据新增
            Score scores=new Score();
            scores.setUserId(uid);
            if(scoreType_name.equals("购物")){
                Double money = new Double(map.get("money").toString());
                BigDecimal big = new BigDecimal(Double.valueOf(scoreType.getValue().toString()));
                double score=Math.ceil(money*big.setScale(1,BigDecimal.ROUND_HALF_UP).doubleValue());
                scores.setScores(Integer.valueOf(String.valueOf(score)));
            }else{
                scores.setScores(Integer.valueOf(scoreType.getValue().toString()));
            }

            return   scoreService.save(scores)?1:0;
        }

    }

    @RequestMapping("/consumeScore/{userId}")
    public  int  consumeScore(@PathVariable("userId") Integer userId){
        return scoreService.consumeScore(userId);
    }






}
