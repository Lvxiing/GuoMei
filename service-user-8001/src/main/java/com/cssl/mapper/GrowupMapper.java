package com.cssl.mapper;

import com.cssl.entity.Growup;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.bouncycastle.operator.MacCalculatorProvider;

import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface GrowupMapper extends BaseMapper<Growup> {

   int   updateGrowupSum(Map map);

}
