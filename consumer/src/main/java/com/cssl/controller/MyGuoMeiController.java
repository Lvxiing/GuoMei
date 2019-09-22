package com.cssl.controller;

import com.cssl.api.ProductFeignInterface;
import com.cssl.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/myGuoMei")
public class MyGuoMeiController {

    @Autowired
    private ProductFeignInterface productFeignInterface;
    //
//    @ResponseBody
//    @RequestMapping("/myOrder")
//    public String myOrder(HttpSession session){
//        Users user = (Users)session.getAttribute("user");
//       // Integer uid = user.getId();//测试传死值
//        //System.out.println("user = " + user);
//
//        return user.getUserName();
//    }
    //查询所有省份
    @RequestMapping("findProvince")
    @ResponseBody
    public List<Province> findProVince(){
        return productFeignInterface.findProVince();
    }

    //通过省份id查询城市
    @RequestMapping("findCityByProvince")
    @ResponseBody
    public List<City> findCityByProvince(@RequestParam Integer province_id){
        return productFeignInterface.findCityByProvince(province_id);
    }

    //通过城市查询区
    @RequestMapping("findAreaByCity")
    @ResponseBody
    public List<District> findAreaByCity(@RequestParam Integer city_id){
        return productFeignInterface.findAreaByCity(city_id);
    }
    //通过区查询街道
    @RequestMapping("findStreetByArea")
    @ResponseBody
    public List<Street> findStreetByArea(@RequestParam Integer district_id){
        return productFeignInterface.findStreetByArea(district_id);
    }

    //新增收获地址
    @RequestMapping(value = "addAddressPage",method = RequestMethod.GET)
    @ResponseBody
    public int addAddress(@RequestParam(value = "province_id") Integer provinceId,//省id
                          @RequestParam(value = "city_id") Integer cityId,//市id
                          @RequestParam(value = "district_id") Integer districtId,//区id
                          @RequestParam(value = "street_id") Integer streetId,//街id
                          @RequestParam(value = "user_id") Integer userId,//用户id
                          @RequestParam(value = "address_name") String userName,//收货人
                          @RequestParam(value = "address_detail") String address,//详细地址
                          @RequestParam(value = "user_phone") String phone,//收货人电话
                          @RequestParam(value = "user_email") String email,//邮箱
                          @RequestParam(value = "address_isdefault") Integer isdefault//是否为默认地址
    ){
        Address as = new Address();
        as.setProvinceId(provinceId);
        as.setCityId(cityId);
        as.setDistrictId(districtId);
        as.setStreetId(streetId);
        as.setUserId(userId);
        as.setUserName(userName);
        as.setPhone(phone);
        as.setAddress(address);
        as.setEmail(email);
        as.setIsdefault(isdefault);
        return productFeignInterface.addAddressPage(as);
    }
    //查询我的所有收获地址
    @RequestMapping("findAddress")
    @ResponseBody
    public List<Address> findAddress(){
        return productFeignInterface.findAddress();
    }
    //查询城市
    @RequestMapping("findNameByCityId")
    @ResponseBody
    public String findNameByCityId(@RequestParam Integer city_id){
        return productFeignInterface.findNameByCityId(city_id);
    }
    //根据id查询区名称
    @RequestMapping("findNameByDistrictId")
    @ResponseBody
    public String findNameByDistrictId(@RequestParam Integer district_id){
        return productFeignInterface.findNameByDistrictId(district_id);
    }
    //根据id查询省名称
    @RequestMapping("findNameByProvinceId")
    @ResponseBody
    public String findNameByProvinceId(@RequestParam Integer province_id){
        return productFeignInterface.findNameByProvinceId(province_id);
    }
    //根据id查询街名称
    @RequestMapping("findNameByStreetId")
    @ResponseBody
    public String findNameByStreetId(@RequestParam Integer street_id){
        return productFeignInterface.findNameByStreetId(street_id);
    }
    @RequestMapping("showAddress")
    @ResponseBody
    public List<Address> showAddress(@RequestParam(value = "userid") Integer uId){
        return productFeignInterface.showAddress(uId);
    }
}
