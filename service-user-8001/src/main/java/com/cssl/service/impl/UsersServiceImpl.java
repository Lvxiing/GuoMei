package com.cssl.service.impl;

import com.cssl.entity.Users;
import com.cssl.mapper.UserMapper;
import com.cssl.mapper.UserMapper;
import com.cssl.service.UsersService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
public class UsersServiceImpl extends ServiceImpl<UserMapper, Users> implements UsersService {

}
