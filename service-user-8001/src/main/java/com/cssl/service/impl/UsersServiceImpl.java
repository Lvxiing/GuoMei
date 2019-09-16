package com.cssl.service.impl;

import com.cssl.entity.Users;
import com.cssl.mapper.UserMapper;
import com.cssl.mapper.UserMapper;
import com.cssl.service.UsersService;
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
public class UsersServiceImpl extends ServiceImpl<UserMapper, Users> implements UsersService {

    @Autowired
    private   UserMapper userMapper;

    @Override
    public Page<Users> usersFenYe(String userName, int pageIndex, int pageSize) {
        Page<Users> usersPage = PageHelper.startPage(pageIndex, pageSize);
        userMapper.findUsers(userName);
        return usersPage;
    }

    @Override
    public Page<Map> userVipFenYe(Map map, int pageIndex, int pageSize) {
        Page<Map> userVipPage = PageHelper.startPage(pageIndex, pageSize);
        userMapper.findVip(map);
        return userVipPage;
    }

}
