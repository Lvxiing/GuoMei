package com.cssl.service;

import com.cssl.entity.GrowupDetail;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface Growup_detailService extends IService<GrowupDetail> {

    int  saveGrowupdetail(Map map);

    List<Map> findGrowupDetail(Integer userId);

    Map  detailDescription();
}
