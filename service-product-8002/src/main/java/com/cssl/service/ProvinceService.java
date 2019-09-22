package com.cssl.service;

import com.cssl.entity.Province;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface ProvinceService extends IService<Province> {

    //查询所有省份
    List<Province> findProvince();
    //根据省Id查询省名称
    String findNameByProvinceId(Integer province_id);
}
