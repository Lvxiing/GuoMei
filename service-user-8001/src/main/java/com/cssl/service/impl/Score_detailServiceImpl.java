package com.cssl.service.impl;

import com.cssl.entity.ScoreDetail;
import com.cssl.mapper.Score_detailMapper;
import com.cssl.service.Score_detailService;
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
public class Score_detailServiceImpl extends ServiceImpl<Score_detailMapper, ScoreDetail> implements Score_detailService {
     @Autowired
      private Score_detailMapper score_detailMapper;
     @Override
    public int saveScoreDetail(Map map) {
        return score_detailMapper.saveScoreDetail(map);
    }
}
