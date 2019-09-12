package com.cssl.service;

import com.cssl.entity.Users;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.pagehelper.Page;

import javax.management.loading.PrivateClassLoader;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface UsersService extends IService<Users> {

    //分页
    Page<Users> UsersFenYe(String userName, int pageIndex, int pageSize);


}
