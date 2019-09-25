package com.cssl.mapper;

import com.cssl.entity.Score;
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
public interface ScoreMapper extends BaseMapper<Score> {
    int   updateScoreSum(Map map);
    int updateCartScoreSum(Map map);
}
