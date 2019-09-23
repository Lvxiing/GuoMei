package com.cssl.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.Collections;
import com.cssl.mapper.CollectionsMapper;
import com.cssl.service.CollectionsService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
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
@Transactional
public class CollectionsServiceImpl extends ServiceImpl<CollectionsMapper, Collections> implements CollectionsService {

    @Autowired
    private CollectionsMapper collectionsMapper;

    @Override
    public Page<Map> collectionFenYe(Integer userId, int pageIndex, int pageSize) {
        Page<Map> page = PageHelper.startPage(pageIndex, pageSize);
        collectionsMapper.findCollection(userId);
        return  page;
    }
}
