package com.cssl.service.impl;

import com.cssl.entity.Userinfo;
import com.cssl.mapper.UserinfoMapper;
import com.cssl.service.UserinfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
public class UserinfoServiceImpl extends ServiceImpl<UserinfoMapper, Userinfo> implements UserinfoService {

    @Autowired
    private UserinfoMapper userinfoMapper;

    @Override
    public Page<Map> UserInfoFenYe(Map map, int pageIndex, int pageSize) {
        Page<Map> userInfoPage = PageHelper.startPage(pageIndex, pageSize);
        userinfoMapper.findVip(map);
        return userInfoPage;
    }

}
