package com.cssl.api;

import com.cssl.entity.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@FeignClient("service-user")
public interface UserFeignInterface {
    //使用接口映射

    @RequestMapping("/users/ajaxNum")
     String sendMsg(@RequestParam("phoneNum") String phoneNum) throws Exception;

    @RequestMapping("/users/verfiy")
     Map<String,String> login(@RequestParam("phoneNum") String phoneNum, @RequestParam("code") String code);

    @RequestMapping("/users/selectPhone")
      Users  selectPhone(@RequestParam("phoneNum") String phoneNum);

    @RequestMapping("/users/userRegister")
       boolean   userRegister(Users users);

    @RequestMapping("/users/selectUserName")
    Users  selectUserName(@RequestParam("userName") String userName);

    @RequestMapping("/growup/saveGrowup")
      boolean   saveGrowup(Growup growup);

    @RequestMapping("/growup_type/findByTypeName/{typeName}")
     GrowupType findByTypeName(@PathVariable("typeName") String typeName);

    @RequestMapping("/growup/updateGrowupSum")
    int updateGrowupSum(@RequestParam Map map);

    @RequestMapping("/users/updateLoginTime")
     boolean updateLoginTime(Users users);

    @RequestMapping("/growup_detail/saveGrowupdetail")
     int saveGrowupdetail(@RequestParam  Map map);

    @RequestMapping("/users/findVip")
     List<Map> findVip(@RequestParam  Map map);

    @RequestMapping("/growup_detail/findGrowupDetail/{userId}")
     List<Map> findGrowupDetail(@PathVariable("userId") Integer userId);

    @RequestMapping("/growup_detail/detailDescription")
     Map detailDescription();


    //****************** 购物车 ***************

    @RequestMapping("/cart/saveCart")
    boolean saveCart(Cart cart);


    @RequestMapping("/cart/cartAllGoodsByUserId/{userId}")
    List<Map> cartAllGoodsByUserId(@PathVariable("userId") Integer userId);


    @RequestMapping("/cart/cartCount/{userId}")
     Integer cartCount(@PathVariable("userId") Integer userId);


    @RequestMapping("/cart/findGoodsId/{goodsId}")
     Cart  findGoodsId(@PathVariable("goodsId") Integer goodsId);

    @RequestMapping("/cart/updateCartNum")
     int updateCartNum(@RequestParam Map map);

    @RequestMapping("/cart/delCartGood")
     boolean delCartGood(@RequestParam Map map);

    @RequestMapping("/collection/saveCollection")
     boolean  saveCollection(Collections collections);

    @RequestMapping("/collection/findIfCollected")
     Collections  findIfCollected(@RequestParam Map map);

    @RequestMapping("/vip_goods/ifVipGoods/{goodsId}")
     VipGoods   ifVipGoods(@PathVariable("goodsId") Integer goodsId);

    @RequestMapping("/collection/collectionFenYe/{userId}/{pageIndex}/{pageSize}")
     PageInfo<Map> collectionFenYe(@PathVariable("userId") Integer userId,@PathVariable("pageIndex") int pageIndex,@PathVariable("pageSize") int pageSize);

    @RequestMapping("/collection/delCollection/{collectionId}")
     boolean  delCollection(@PathVariable("collectionId") Integer collectionId);

    //**********后台***********

    @RequestMapping("/users/adminLogin")
     Users adminLogin(Users users);

    @RequestMapping("/users/findUsers/{userName}/{pageIndex}/{pageSize}")
     PageInfo<Users> usersFenYe(@PathVariable("userName") String userName, @PathVariable("pageIndex") int pageIndex, @PathVariable("pageSize") int pageSize);

    @RequestMapping("/users/delUser/{id}")
     boolean delUser(@PathVariable("id") Integer id);

    @RequestMapping("/users/findById/{id}")
     Users findById(@PathVariable("id") Integer id);

    @RequestMapping("/users/updateUser")
     boolean updateUser(@RequestParam Map<String,String> map);

    @RequestMapping("/users/updatePwd")
     boolean  updatePwd(Users users);

    @RequestMapping("/users/selectPwd")
     Users selectPwd(Users user);

    @RequestMapping("/users/findVip/{pageIndex}/{pageSize}")
     PageInfo<Map> userVipFenYe(@RequestBody Map map, @PathVariable("pageIndex") int pageIndex, @PathVariable("pageSize") int pageSize);

    @RequestMapping("/grade/allGrade")
     List<Grade> allGrade();


}
