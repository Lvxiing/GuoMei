package com.cssl.service;

import com.cssl.entity.Street;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface StreetService extends IService<Street> {
    //通过区id来查询街
    List<Street> findStreetByArea(Integer district_id);

    //通过街Id查询街名称
    String findNameByStreetId(Integer street_id);
}
