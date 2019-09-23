package com.cssl.service;

import com.cssl.entity.ScoreDetail;
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
public interface Score_detailService extends IService<ScoreDetail> {
    int  saveScoreDetail(Map map);
}
