package com.cssl.service.impl;

import com.cssl.entity.Address;
import com.cssl.mapper.AddressMapper;
import com.cssl.service.AddressService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
public class AddressServiceImpl extends ServiceImpl<AddressMapper, Address> implements AddressService {

    @Autowired
    private AddressMapper addressMapper;

    @Override
    public int addAddressPage(Address address) {
        Integer userid = address.getUserId();//获取用户id
        Integer isdefault = address.getIsdefault();//获取是否为默认地址 1为默认地址 2 为普通地址
        if(isdefault == 1){
            addressMapper.updatePTAddress(userid);
        }
        return addressMapper.addAddressPage(address);
    }

    @Override
    public List<Address> findAddress() {
        return addressMapper.findAddress();
    }

    @Override
    public List<Address> showAddress(Map<String, Object> map) {
        return addressMapper.showAddress(map);
    }

    @Override
    public int updatePTAddress(Integer userid) {
        return addressMapper.updatePTAddress(userid);
    }

    @Override
    public int updateMRAddress(Map<String,Object> map) {
        Integer userid = new Integer(map.get("userid").toString());
        addressMapper.updatePTAddress(userid);
        Integer address_id = new Integer(map.get("address_id").toString());
        Map<String,Object> ms = new HashMap<String,Object>();
        ms.put("userid",userid);
        ms.put("address_id",address_id);
        return addressMapper.updateMRAddress(ms);
    }

}
