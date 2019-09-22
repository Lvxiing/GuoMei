package com.cssl.mapper;

import com.cssl.entity.Province;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface ProvinceMapper extends BaseMapper<Province> {

    //查询所有省份
    List<Province> findProvince();

    //根据省Id查询省名称
    String findNameByProvinceId(Integer province_id);

}
