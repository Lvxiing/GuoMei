package com.cssl.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.Collections;
import com.github.pagehelper.Page;

import javax.management.loading.PrivateClassLoader;
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
public interface CollectionsService extends IService<Collections> {

    Page<Map> collectionFenYe(Integer userId, int pageIndex, int pageSize);
}
