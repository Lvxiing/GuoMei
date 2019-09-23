package com.cssl.controller;


import com.cssl.service.Score_detailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
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
@RequestMapping("/score_detail")
public class Score_detailController {
  @Autowired
    private Score_detailService score_detailService;

    @RequestMapping("/saveScoreDetail")
   public  int saveScoreDetail(@RequestParam Map map){
        map.put("time",new Date());
       return score_detailService.saveScoreDetail(map);
   }

}
