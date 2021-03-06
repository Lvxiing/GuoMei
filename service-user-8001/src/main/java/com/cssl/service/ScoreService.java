package com.cssl.service;

import com.cssl.entity.Score;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface ScoreService extends IService<Score> {
    int   updateScoreSum(Map map);
    int updateCartScoreSum(Map map);

    int consumeScore(Integer userId);
}
