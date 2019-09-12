package com.cssl.service;

import com.cssl.entity.Userinfo;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.pagehelper.Page;

import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface UserinfoService extends IService<Userinfo> {

    //分页
    Page<Map> UserInfoFenYe(Map map, int pageIndex, int pageSize);

}
