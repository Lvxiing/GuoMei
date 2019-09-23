package com.cssl.mapper;

import com.cssl.entity.Address;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Delete;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface AddressMapper extends BaseMapper<Address> {
    //新增收获地址
    int addAddressPage(Address address);
    //查询我的所有收货地址
    List<Address> findAddress();
    //查询我的收货地址
    List<Address> showAddress(Map<String,Object> map);

}
