package com.cssl.service.impl;

import com.cssl.entity.Address;
import com.cssl.mapper.AddressMapper;
import com.cssl.service.AddressService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        return addressMapper.addAddressPage(address);
    }

    @Override
    public List<Address> findAddress() {
        return addressMapper.findAddress();
    }

    @Override
    public List<Address> showAddress(Integer uId) {
        return addressMapper.showAddress(uId);
    }
}
