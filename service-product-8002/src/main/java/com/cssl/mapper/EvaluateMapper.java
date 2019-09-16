package com.cssl.mapper;

import com.cssl.entity.Evaluate;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface EvaluateMapper extends BaseMapper<Evaluate> {

    //查询全部评论
    List<Map<String,Object>> evaluateFindAll(Map<String,Object> map);

    //查看某商品下的所有评论信息
    List<Map<String,Object>> goodsEvaluate(Integer gid);
}
