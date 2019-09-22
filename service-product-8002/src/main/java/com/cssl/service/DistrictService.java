package com.cssl.service;

import com.cssl.entity.District;
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
public interface DistrictService extends IService<District> {

    //根据城市名查询区
    List<District> findAreaByCity(Integer city_id);
    //根据区Id回显区名称
    String findNameByDistrictId(Integer district_id);
}
