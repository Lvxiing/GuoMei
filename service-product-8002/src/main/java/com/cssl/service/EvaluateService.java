package com.cssl.service;

import com.cssl.entity.Evaluate;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.pagehelper.Page;

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
public interface EvaluateService extends IService<Evaluate> {

    //查询所有评论
    Page<Map<String,Object>> evaluateFindAll(Map<String,Object>map, int pageIndex, int pageSize);

    //查询所有商品
    Page<Map<String,Object>> goodsEvaluate(Integer gid,int pageIndex,int pageSize);
    //根据用户查询评价商品信息(可以是未评价0 评价1)
    Object evaluateInfo(Map<String,Object> map, int pageIndex, int pageSize);
}
