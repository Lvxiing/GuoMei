package com.cssl.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.Cart;

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
public interface CartService extends IService<Cart> {

    List<Map> cartAllGoodsByUserId(Integer userId);

    Integer cartCount(Integer userId);

    int updateCartNum(Map map);

}
