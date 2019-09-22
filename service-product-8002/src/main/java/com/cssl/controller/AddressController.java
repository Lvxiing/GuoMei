package com.cssl.controller;


import com.cssl.entity.Address;
import com.cssl.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

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
    public List<Address> showAddress(@RequestParam(value = "userid")  Integer uId){
        return addressService.showAddress(uId);
    }

}
