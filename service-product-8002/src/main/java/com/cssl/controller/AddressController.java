package com.cssl.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cssl.entity.Address;
import com.cssl.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
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
@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @RequestMapping("addAddressPage")
    @ResponseBody
    public int addAddressPage(@RequestBody Address address1){
        return addressService.addAddressPage(address1);
    }

    //查询我的所有收货地址
    @RequestMapping("findAddress")
    @ResponseBody
    public List<Address> findAddress(){
        return addressService.findAddress();
    }
    @RequestMapping("showAddress")
    @ResponseBody
    public List<Address> showAddress(@RequestParam Map<String,Object>map){
        return addressService.showAddress(map);
    }

    //查询当前用户是否有收获地址
    @RequestMapping("selectAddressExist")
    @ResponseBody
    public  String selectAddressExist(@RequestParam Integer uid){
        System.out.println("uid = " + uid);
        int count = addressService.count(new QueryWrapper<Address>().eq("user_id", uid));
        String json ;
        if(count==0){
            json = "{\"code\":\"no\"}";
            return  json;
        }
        return "{\"code\":\"yes\"}";
    }

    //根据address_id删除收货地址
    @RequestMapping("deleteAddress")
    @ResponseBody
    public boolean deleteAddress(@RequestParam(value = "address_id") Integer id){return addressService.removeById(id);}

    //根据adddress_id修改收货地址
    @RequestMapping("updateAddress")
    @ResponseBody
    public boolean updateAddress(@RequestBody Address address){
        Integer userid = address.getUserId();
        Integer address_id = address.getIsdefault();
        if(address_id == 1){
            addressService.updatePTAddress(userid);
        }
        return addressService.updateById(address);
    }
    //修改该用户下的所有地址为普通用户
    @RequestMapping("updatePTAddress")
    @ResponseBody
    public int updatePTAddress(@RequestParam Integer userid) {
        return addressService.updatePTAddress(userid);
    }
    //根据address_id修改为默认地址
    @RequestMapping("updateMRAddress")
    @ResponseBody
    public int updateMRAddress(@RequestParam Map<String,Object> map) {
        return addressService.updateMRAddress(map);
    }
}
