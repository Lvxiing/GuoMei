package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.api.RedisFeignInterface;
import com.cssl.api.UserFeignInterface;
import com.cssl.entity.PageInfo;
import com.cssl.entity.Users;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RequestMapping("/evaluate")
@Controller
public class EvaluateController {

    @Autowired
    private UserFeignInterface userFeignInterface;

    @Autowired
    private RedisFeignInterface redisFeignInterface;

    @Autowired
    private ProductFeignInterface productFeignInterface;

    //查看订单详情购买商品信息
    @RequestMapping("/evaluateFindAll/{content}/{num}/{name}")
    @ResponseBody
    public Map<String,Object> evaluateFindAll(@PathVariable("num") String num, @PathVariable("name") String name, @PathVariable("content") String content, @RequestParam("page")int page, @RequestParam("limit")int limit){
        Map<String,Object> param = new HashMap<>();
        param.put("num",num);
        param.put("name",name);
        param.put("content",content);
        Map<String,Object> map = new HashMap<String,Object>();
        PageInfo<Map<String, Object>> mapPageInfo = productFeignInterface.evaluateFindAll(param,page,limit);
        map.put("code",0);
        map.put("msg", "");
        map.put("data",mapPageInfo.getList());
        map.put("count",mapPageInfo.getTotalCount());
        return map;
    }

    @RequestMapping("goodsEvaluate")
    @ResponseBody
    public PageInfo<Map<String,Object>> goodsEvaluate(@RequestParam("gid") Integer gid,@RequestParam("pageIndex") Integer pageIndex,@RequestParam("pageSize") Integer pageSize){

        return  productFeignInterface.goodsEvaluate(gid,pageIndex,pageSize);
    }
    //新增评价(追加评论)
    @RequestMapping("addEvaluate")
    @ResponseBody
    public  String addEvaluate(HttpSession session,@RequestParam Map<String,Object> map){
        Users users = (Users)session.getAttribute("user");
        Object orderno = map.get("order_no");
        Object gid = map.get("goods_id");
        //添加成长值
        addGrowth(users.getId(),orderno,gid);
        boolean b = productFeignInterface.addEvaluate(map);
        String json="{\"abc\":\"false\"}";
        if(b){
            json="{\"abc\":\"true\"}";
        }
        return json;
    }
    //添加成长值和积分
    public void addGrowth(Integer uid,Object order_no,Object goods_id){
        Map maps = new HashMap();
        maps.put("userId", uid);
        final String typeName = "文字评价";
        maps.put("typeName", typeName);
        int ucount = userFeignInterface.updateGrowupSum(maps);
        int scount = userFeignInterface.saveGrowupdetail(maps);
        userFeignInterface.updateScoreSum(maps);
        userFeignInterface.saveScoreDetail(maps);
        //时间格式转换
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        //将此次获得的成长值详细说明存入redis中
        Map desMap = userFeignInterface.detailDescription();
        Object gdetailId = desMap.get("gdetailId");
        Object gdetailTime = desMap.get("gdetailTime");
        System.out.println("orderno:"+order_no+",gid:"+goods_id+",uid:"+uid);
        try {
            Date parse = sdf.parse(gdetailTime.toString());
            redisFeignInterface.set(gdetailId.toString(),"订单号:"+order_no+",商品id:"+ goods_id,-1);
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

     //修改评价(晒单评论)
    @RequestMapping("updateEvaluate")
    @ResponseBody
    public  String  updateEvaluate(HttpSession session,@RequestParam Map<String,Object> map){
        Users users = (Users)session.getAttribute("user");
        Object orderno = map.get("order_no");
        Object gid = map.get("goods_id");
        //添加成长值
        addGrowth(users.getId(),orderno,gid);
        boolean b = productFeignInterface.updateEvaluate(map);
        String json="{\"abc\":\"false\"}";
        if(b){
            json="{\"abc\":\"true\"}";
        }
        return json;
    }
    @RequestMapping("evaluateInfo")
    @ResponseBody
    //根据用户查询评价商品信息(可以是未评价0 评价1)
    public  Object evaluateInfo(HttpSession session, @RequestParam Map<String,Object> map, @RequestParam("pageIndex") Integer pageIndex, @RequestParam("pageSize") Integer pageSize){
        Users users = (Users)session.getAttribute("user");
        map.put("user_id",users.getId());
        return productFeignInterface.evaluateInfo(map,pageIndex,pageSize);
    }
}
