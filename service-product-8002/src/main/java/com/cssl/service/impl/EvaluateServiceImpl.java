package com.cssl.service.impl;

import com.cssl.entity.Evaluate;
import com.cssl.mapper.EvaluateMapper;
import com.cssl.service.EvaluateService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
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
public class EvaluateServiceImpl extends ServiceImpl<EvaluateMapper, Evaluate> implements EvaluateService {

    @Autowired
    private EvaluateMapper evaluateMapper;

    @Override
    public Page<Map<String, Object>> evaluateFindAll(Map<String, Object> map, int pageIndex, int pageSize) {
        Page<Map<String, Object>> page = PageHelper.startPage(pageIndex, pageSize);
        evaluateMapper.evaluateFindAll(map);
        return page;
    }
}
