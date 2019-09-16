package com.cssl.mapper;

import com.cssl.entity.GrowupDetail;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface Growup_detailMapper extends BaseMapper<GrowupDetail> {

   int  saveGrowupdetail(Map map);
}
