package com.cssl.service.impl;

import com.cssl.entity.Score;
import com.cssl.mapper.ScoreMapper;
import com.cssl.service.ScoreService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
public class ScoreServiceImpl extends ServiceImpl<ScoreMapper, Score> implements ScoreService {
    @Autowired
    private  ScoreMapper scoreMapper;

    @Override
    public int updateScoreSum(Map map) {
        return scoreMapper.updateScoreSum(map);
    }

    @Override
    public int updateCartScoreSum(Map map) {
        return scoreMapper.updateCartScoreSum(map);
    }
}
